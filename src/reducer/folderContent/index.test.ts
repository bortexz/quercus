import folderContent from './index';
import { FolderContent } from '../../types/state';
import * as atypes from '../../constants/actionTypes';

const children: FolderContent = [
  { name: 'hello world', type: 'file' },
  {
    name: 'things',
    type: 'folder',
  },
];

describe('Checking folders content', () => {
  test('Initial state', () => {
    const initialState: FolderContent = [];
    const finalState: FolderContent = [];
    const action = {
      type: 'DEFAULT',
      payload: {},
    };

    // @ts-ignore
    expect(folderContent(initialState, action)).toEqual(finalState);
  });

  test('Navigation to some folder', () => {
    const initialState = children;
    const finalState: FolderContent = [];
    const action = {
      type: atypes.SET_CURRENT_PATH,
      payload: {},
    };

    // @ts-ignore
    expect(folderContent(initialState, action)).toEqual(finalState);
  });

  test('Getting the contents of the folder', () => {
    const initialState: FolderContent = [];
    const finalState = children;
    const action = {
      type: atypes.GET_FOLDER_CONTENTS_SUCCESS,
      payload: {
        children,
      },
    };

    // @ts-ignore
    expect(folderContent(initialState, action)).toEqual(finalState);
  });
});
