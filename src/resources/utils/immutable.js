/**
 * Immutable utils
 */
import { List } from 'immutable'

export function unionStringLists (first, second) {
  let union = {}
  first.forEach(x => {
    union[x] = undefined
  })
  second.forEach(x => {
    union[x] = undefined
  })
  return List(Object.keys(union))
}
