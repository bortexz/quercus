import { List } from 'immutable'

const files = (state = List(), action) => {
  switch (action.type) {
    case 'GET_FILES_OK': return action.files
    default: return state
  }
}

export default files
