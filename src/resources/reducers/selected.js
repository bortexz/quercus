import { List } from 'immutable'
import { SELECT_FILES, GET_FILES_OK } from '../actions/content'

const files = (state = List(), action) => {
  switch (action.type) {
    case SELECT_FILES: return action.items
    case GET_FILES_OK: return List() // No selected on change path
    default: return state
  }
}

export default files
