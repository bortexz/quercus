import { combineReducers } from 'redux'

import sidebarItems from './sidebar'
import content from './files'
import directory from './directory'
import errors from './errors'
import selected from './selected'
import options from './options'

const Reducers = combineReducers({
  sidebarItems,
  files: content,
  errors,
  directory,
  selected,
  options
})

export default Reducers
