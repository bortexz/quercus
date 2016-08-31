import {clipboard} from 'electron'

// TODO: Make compatible with native files clipboard
// In the meanwhile, a custom format on text will be used
// with full paths:
// [cut][copy]
// filepath1
// filepath2
// ...

/**
 * Where files is a unique path or an array of them
 */
export function copyFiles (files) {
  if (!files instanceof Array) files = [files]
}

export function cutFiles () {

}

/**
 * currentDir: The current directory where to paste the files
 *
 */
export function pasteFiles (currentDir, cut) {

}
