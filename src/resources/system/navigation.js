import {remote} from 'electron'
let path = remote.require('path') // Multiplatform path!

export function canGoUp (current) {
  if (current) {
    let parsedPath = path.parse(current)
    console.log(parsedPath)
    return parsedPath.base !== ''
  }
  return false
}

export function getUpDir (current) {
  return path.parse(current).dir
}
