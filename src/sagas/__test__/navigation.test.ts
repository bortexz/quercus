import { expectSaga } from 'redux-saga-test-plan';

import * as atypes from '../../constants/actionTypes';
import { navigate } from '../navigation';
import { SetCurrentPathAction } from '../../types/actions';
const { listFilesResponse } = require('../../__mock__/api');

jest.mock('../../api/navigation', () => {
  return require('../../__mock__/api');
});

describe('navigation saga', () => {
  it('navigation saga success', async () => {
    const initialAction: SetCurrentPathAction = {
      type: atypes.SET_CURRENT_PATH,
      payload: {
        path: '/',
      },
    };

    expectSaga(navigate, initialAction)
      .put({
        type: atypes.GET_FOLDER_CONTENTS_SUCCESS,
        payload: {
          children: listFilesResponse,
        },
      })
      .run();
  });
});
