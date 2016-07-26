export const REMOVE_ERRORS = 'REMOVE_ERRORS'

export function removeError (index) {
  return {
    type: REMOVE_ERRORS,
    index
  }
}
