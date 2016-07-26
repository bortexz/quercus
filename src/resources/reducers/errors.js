import {REMOVE_ERRORS} from '../actions/errors'
import {List} from 'immutable'

const errors = (state = List(), action) => {
  const {type, error} = action
  if (error) {
    return state.push(action)
  } else if (type === REMOVE_ERRORS) {
    return state.splice(action.index, 1)
  }
  return state
}

export default errors
