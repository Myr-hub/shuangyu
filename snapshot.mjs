// 独立教学示例，不是双娱原始源码。
export function applySnapshot(current, incoming) {
  if (!incoming || typeof incoming.roomId !== 'string' || !incoming.roomId.trim())
    throw new TypeError('房间标识无效');
  if (!Number.isSafeInteger(incoming.version) || incoming.version < 0)
    throw new TypeError('版本号无效');
  if (!['waiting', 'playing', 'closed'].includes(incoming.phase))
    throw new TypeError('状态无效');
  if (current && current.roomId !== incoming.roomId)
    throw new Error('不同房间不能合并');
  if (current && incoming.version <= current.version) return current;
  return {roomId:incoming.roomId, version:incoming.version, phase:incoming.phase};
}
