import currentPath from './index';
import * as atypes from '../../constants/actionTypes';
import { SetCurrentPathAction } from '../../types/actions';

describe('Setting current path', () => {
  test('Checking initial state', () => {
    const initialState = '/';
    const finalState = '/';
    const action = {
      type: 'DEFAULT',
      payload: {},
    };

    // @ts-ignore
    expect(currentPath(initialState, action)).toEqual(finalState);
  });

  test('Setting some path', () => {
    const initialState = '/Desktop';
    const finalState = '/Desktop';
    const action: SetCurrentPathAction = {
      type: atypes.SET_CURRENT_PATH,
      payload: {
        path: '/Desktop',
      },
    };

    expect(currentPath(initialState, action)).toEqual(finalState);
  });
});
