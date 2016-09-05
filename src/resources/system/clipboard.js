import {clipboard, remote} from 'electron'
let sh = remote.require('shelljs')

const QUERCUS_COPY_PREFIX = '[quercus/copy]'
// TODO: Make compatible with native files clipboard
// In the meanwhile, a custom format on text will be used
// with full paths:
// [quercus/copy]
// filepath1
// filepath2
// ...

/**
 * Where files is a unique path or an array of them
 * @param {Array.<String>} files Array of filepaths to copy
 */
export function copyFiles (files) {
  if (!(files instanceof Array)) files = [files]
  let clipboardText = `${QUERCUS_COPY_PREFIX}\n`
  files.forEach(file => {
    clipboardText = clipboardText.concat(`${file}\n`)
  })
  clipboard.writeText(clipboardText)
}

/**
 * dest: [String] destination where to paste the files
 * cut: [Boolean] If files should be deleted at source
 */
export function pasteFiles (dest, cut) {
  // Get files to copy
  let text = clipboard.readText()
  if (!(text.indexOf(QUERCUS_COPY_PREFIX) === 0)) return

  let files = text
    .split('\n')
    .splice(1)
    .filter(elem => elem !== '')

  // TODO: Not reliable, move to main process
  sh.cp('-R', files, dest)

  if (cut) return // TODO: Do RM of source
}
