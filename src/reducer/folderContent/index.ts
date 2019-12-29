import * as atypes from '../../constants/actionTypes';
import { FolderContent } from '../../types/state';
import { GetFolderContentAction } from '../../types/actions';

export default function(
  state: FolderContent = [],
  { type, payload }: GetFolderContentAction
) {
  switch (type) {
    case atypes.SET_CURRENT_PATH:
      return [];
    case atypes.GET_FOLDER_CONTENTS_SUCCESS:
      return payload.children;
    default:
      return state;
  }
}
