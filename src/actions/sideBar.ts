import * as atypes from '../constants/actionTypes';

import { SetCurrentPathAction } from '../types/actions';

export const setCurrentPath = (path: string): SetCurrentPathAction => ({
  type: atypes.SET_CURRENT_PATH,
  payload: { path },
});
