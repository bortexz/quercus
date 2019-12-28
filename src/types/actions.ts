import * as atypes from '../constants/actionTypes';
import { Child } from './state';

export interface SetCurrentPathAction {
  type: typeof atypes.SET_CURRENT_PATH;
  payload: {
    path: string;
  };
}

export interface GetFolderContentAction {
  type:
    | typeof atypes.SET_CURRENT_PATH
    | typeof atypes.GET_FOLDER_CONTENTS_SUCCESS;
  payload: {
    children: Array<Child>;
  };
}
