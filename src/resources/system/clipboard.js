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
 * @param {Array.<String>} files Array of filepaths to copy
 */
export function copyFiles (files) {
  if (!(files instanceof Array)) files = [files]
  let clipboardText = '[quercus/copy]\n'
  files.forEach(file => {
    clipboardText = clipboardText.concat(`${file}\n`)
  })
  clipboard.writeText(clipboardText)
}

/**
 * currentDir: The current directory where to paste the files
 *
 */
export function pasteFiles (currentDir, cut) {

}
