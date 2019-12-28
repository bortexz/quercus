import * as atypes from '../constants/actionTypes';

import { SetCurrentPathAction } from '../types/actions';

export default function(
  state: string = '/home/rafi',
  { type, payload }: SetCurrentPathAction
) {
  switch (type) {
    case atypes.SET_CURRENT_PATH:
      return payload.path;
    default:
      return state;
  }
}
