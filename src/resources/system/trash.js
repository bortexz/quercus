import {shell} from 'electron'

export function moveToTrash (files) {
  if (!(files instanceof Array)) files = [files]

  files.forEach(file => {
    shell.moveItemToTrash(file)
  })
}
