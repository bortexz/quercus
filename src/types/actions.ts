import * as atypes from '../constants/actionTypes';

export interface SetCurrentPathAction {
  type:
    | typeof atypes.SET_CURRENT_PATH_REQUEST
    | typeof atypes.SET_CURRENT_PATH_FAILURE
    | typeof atypes.SET_CURRENT_PATH_SUCCESS;
  payload: {
    path: string;
    error?: string;
  };
}
