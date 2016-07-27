import {remote, shell} from 'electron'
let sh = remote.require('shelljs')

export function getFiles (dirpath) {
  sh.cd(dirpath)
  try {
    let items = sh.ls('-lA')
    return items.map(item => {
      return {
        name: item.name,
        isDirectory: item.isDirectory()
      }
    })
  } catch (e) {
    throw e
  }
}

export function openFile (filepath) {
  shell.openItem(filepath)
}
