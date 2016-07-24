/*
 * action types
 */

export const LOAD_PATH = 'LOAD_PATH'

export function loadPath(path) {
  return { type: LOAD_PATH, path }
}
