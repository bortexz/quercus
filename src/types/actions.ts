import * as atypes from '../constants/actionTypes';

export interface SetCurrentPathAction {
  type: typeof atypes.SET_CURRENT_PATH;
  payload: {
    path: string;
    error?: string;
  };
}
