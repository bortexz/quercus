import {remote, shell} from 'electron'
let sh = remote.require('shelljs')

export function getFiles (dirpath) {
  let code
  try {
    code = sh.cd(dirpath).code
    if (code !== 0) {
      throw new Error(`shelljs cd exit code
        differet from 0 with path ${dirpath}`)
    }
  } catch (e) {
    throw new Error(`Cannot load path: ${dirpath} message: ${e.message}`)
  }

  try {
    let items = sh.ls('-lA')
    return items.map(item => {
      return {
        name: item.name,
        isDirectory: item.locked ? false : item.isDirectory()
      }
    })
  } catch (e) {
    throw e
  }
}

export function openFile (filepath) {
  shell.openItem(filepath)
}
