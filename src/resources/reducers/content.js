import { List } from 'immutable'

const content = (state = List(), action) => {
  switch (action.type) {
    case 'GET_FILES_OK': return action.files
    default: return state
  }
}

export default content
