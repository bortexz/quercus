// Reducer of common settings
import { Map } from 'immutable'
import {TOGGLE_HIDDEN, APPLY_FILTER} from '../actions/options'
/**
 * hidden: Boolean
 */
const hidden = 'hidden'
const filter = 'filter'

const defaults = {
  [hidden]: false,
  [filter]: ''
}
const options = (state = Map(defaults), action) => {
  switch (action.type) {
    case TOGGLE_HIDDEN: return state.set(hidden, !state.get(hidden))
    case APPLY_FILTER: return state.set(filter, action.glob)
    default: return state
  }
}

export default options
