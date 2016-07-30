export const TOGGLE_HIDDEN = 'TOGGLE_HIDDEN'
export const APPLY_FILTER = 'APPLY_SIMPLE_FILTER'

export function toggleHidden () {
  return {
    type: TOGGLE_HIDDEN
  }
}

export function applyFilter (glob) {
  return {
    type: APPLY_FILTER,
    glob: glob
  }
}
