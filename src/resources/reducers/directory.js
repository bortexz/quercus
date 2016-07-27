import { GET_FILES } from '../actions/content'

const files = (state = '', action) => {
  switch (action.type) {
    case GET_FILES: return action.path
    default: return state
  }
}

export default files
