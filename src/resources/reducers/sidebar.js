import {OrderedMap} from 'immutable'
import {LOAD_SIDEBAR_ITEMS_OK} from '../actions/sidebar'

const sidebarItems = (state = OrderedMap(), action) => {
  switch (action.type) {
    case LOAD_SIDEBAR_ITEMS_OK: {
      return OrderedMap(action.sidebarItems)
    }
    default: return state
  }
}

export default sidebarItems
