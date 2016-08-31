// Actions to deal with the config files
export const LOAD_CONFIG = 'LOAD_CONFIG'
export const LOAD_CONFIG_ERROR = 'LOAD_CONFIG_ERROR'

export function loadConfig () {
  return {type: LOAD_CONFIG}
}

export function loadConfigError (e) {
  return {type: LOAD_CONFIG_ERROR, error: e}
}
