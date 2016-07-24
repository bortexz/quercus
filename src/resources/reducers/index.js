import { combineReducers } from 'redux'
import sidebarItems from './sidebar'
import content from './content'

const Reducers = combineReducers({
  sidebarItems,
  path: content
})

export default Reducers
