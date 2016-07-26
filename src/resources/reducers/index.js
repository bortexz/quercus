import { combineReducers } from 'redux'

import sidebarItems from './sidebar'
import content from './content'
import errors from './errors'

const Reducers = combineReducers({
  sidebarItems,
  files: content,
  errors
})

export default Reducers
