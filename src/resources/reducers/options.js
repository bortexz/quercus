// Reducer of common settings
import { Map } from 'immutable'
import {TOGGLE_HIDDEN} from '../actions/options'
/**
 * hidden: Boolean
 */
const hidden = 'hidden'

const defaults = {
  [hidden]: false
}
const options = (state = Map(defaults), action) => {
  switch (action.type) {
    case TOGGLE_HIDDEN: return state.set(hidden, !state.get(hidden))
    default: return state
  }
}

export default options
