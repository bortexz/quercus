import {remote} from 'electron'
let path = remote.require('path') // Multiplatform path!

export function getBreadcrumbPath (dirpath) {
  if (!(typeof dirpath === 'string')) {
    return []
  }

  let parsedPath = path.parse(dirpath)
  let directories = [
    parsedPath.root,
    ...parsedPath.dir.split(path.sep).slice(1),
    parsedPath.base
  ].filter(elem => elem !== '')

  return directories
}

export function canGoUp (current) {
  if (current) {
    let parsedPath = path.parse(current)
    return parsedPath.base !== ''
  }
  return false
}

export function getUpDir (current) {
  return path.parse(current).dir
}
