/*
 * action types
 */
export const GET_FILES = 'GET_FILES'
export const GET_FILES_OK = 'GET_FILES_OK'
export const GET_FILES_ERR = 'GET_FILES_ERR'

export function getFiles (path) {
  return { type: GET_FILES, path }
}

export function getFilesOk (files) {
  return {type: GET_FILES_OK, files}
}

export function getFilesErr (error) {
  return {type: GET_FILES_ERR, error}
}
