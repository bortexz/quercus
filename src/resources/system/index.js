import * as path from 'path'
import { buildDefault } from './defaults'
// Imports from main process in electron
import {remote} from 'electron'
let fs = remote.require('fs')
let mkdirp = remote.require('mkdirp')
let os = remote.require('os')

// Constants
export const quercusDir = path.join(getHomeDir(), '.quercus')
export const quercusConfig = path.join(quercusDir, 'config.json')

// Some aux functions
function _createDirIfNotExists (path, cb) {
  fs.stat(path, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        mkdirp(path, cb)
      } else cb(err)
    } else cb()
  })
}
/**
 * @param {String} filepath - File path to get or create
 * @parm {String | Buffer} [defaults] - Default content to write into the file if it doesn't exists
 * @param {Function} cb - Function called with err or the data of the file
 */
function _getOrCreateFile (filepath, defaults, cb) {
  if (typeof defaults === 'function') {
    cb = defaults
    defaults = ''
  }
  let dir
  try {
    dir = path.parse(filepath).dir
  } catch (e) {
    cb(e)
    return
  }
  _createDirIfNotExists(dir, (err) => {
    if (err) cb(err)
    else {
      fs.access(filepath, fs.R_OK | fs.W_OK, (err) => {
        if (err) {
          if (err.code === 'ENOENT') {
            fs.writeFile(filepath, defaults, (err) => {
              if (err) cb(err)
              else {
                console.log(`New file created: ${filepath}`)
                cb(null, defaults)
              }
            })
          } else cb(err)
        } else {
          // Read file
          fs.readFile(filepath, cb)
        }
      })
    }
  })
}

function _getConfig (cb) {
  let opts = {
    homedir: getHomeDir()
  }
  let defaults = JSON.stringify(buildDefault(opts), null, 4)
  _getOrCreateFile(quercusConfig, defaults, (err, content) => {
    if (err) cb(err)
    else {
      try {
        let JSONConfig = JSON.parse(content)
        cb(null, JSONConfig)
      } catch (e) {
        cb(new Error(`Malformed config file: ${e.message}`))
      }
    }
  })
}

// Exported functions
export function getHomeDir () {
  return os.homedir()
}

export function getSidebarConfig () {
  return new Promise((resolve, reject) => {
    _getConfig((err, json) => {
      if (err) reject(err)
      else resolve(json.Sidebar)
    })
  })
}
