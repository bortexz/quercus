import { combineReducers } from 'redux'

import sidebarItems from './sidebar'
import content from './files'
import directory from './directory'
import errors from './errors'
import selected from './selected'

const Reducers = combineReducers({
  sidebarItems,
  files: content,
  errors,
  directory,
  selected
})

export default Reducers
