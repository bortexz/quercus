import { GET_FILES } from '../actions/content'
import { Stack, Map } from 'immutable'

let defaults = {
  back: Stack(),
  forward: Stack(),
  current: null
}

const navigation = (state = Map(defaults), action) => {
  switch (action.type) {
    case GET_FILES: {
      let path = action.path
      let current = state.get('current')
      if (action.arrows) {
        // Navigation made by arrows
        if (path === state.get('back').peek()) {
          // Pressed back
          return state
            .set('back', state.get('back').pop())
            .set('forward', state.get('forward').push(current))
            .set('current', path)
        } else if (path === state.get('forward').peek()) {
          // Pressed forward
          return state
            .set('forward', state.get('forward').pop())
            .set('back', state.get('back').push(current))
            .set('current', path)
        }
        return state // Can this happen?
      } else {
        // No arrow press, so we add to back, in case we had current and it's
        // different from path
        if (state.get('current') !== null && state.get('current') !== path) {
          return state
            .set('back', state.get('back').push(current))
            .set('forward', Stack())
            .set('current', path)
        }
        return state.set('current', path)
      }
    }
    default: return state
  }
}

export default navigation
