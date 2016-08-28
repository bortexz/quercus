import {remote} from 'electron'

let fs = remote.require('fs')

export function watch (path, cb) {
  return fs.watch(path, {persistent: false}, cb)
}
