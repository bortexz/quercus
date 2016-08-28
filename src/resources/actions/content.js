/*
 * action types
 */
export const GET_FILES = 'GET_FILES'
export const GET_FILES_OK = 'GET_FILES_OK'
export const GET_FILES_ERR = 'GET_FILES_ERR'
export const SELECT_FILES = 'SELECT_FILES'
export const UPDATED_FILES = 'UPDATED_FILES'

// history to enable/disable add new path to history
export function getFiles (path, arrows = false) {
  return { type: GET_FILES, path, arrows }
}

export function getFilesOk (files) {
  return {type: GET_FILES_OK, files}
}

export function getFilesErr (error) {
  return {type: GET_FILES_ERR, error}
}

export function selectFiles (items) {
  return {type: SELECT_FILES, items}
}

export function updatedFiles () {
  return {type: UPDATED_FILES}
}
