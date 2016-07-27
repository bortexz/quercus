import { combineReducers } from 'redux'

import sidebarItems from './sidebar'
import content from './files'
import errors from './errors'
import selected from './selected'
import options from './options'
import navigation from './navigation'

const Reducers = combineReducers({
  sidebarItems,
  files: content,
  errors,
  selected,
  options,
  navigation
})

export default Reducers
