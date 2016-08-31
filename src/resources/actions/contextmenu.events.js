export const ON_MOVED_TO_TRASH = 'MOVED_TO_TRASH'
export const ON_COPIED = 'ON_MOVED_TO_TRASH'

export function onMovedToTrash (files) {
  return {
    type: ON_MOVED_TO_TRASH,
    files: files instanceof Array ? files : [files]
  }
}

export function onCopied (files) {
  return {
    type: ON_COPIED,
    files: files instanceof Array ? files : [files]
  }
}
