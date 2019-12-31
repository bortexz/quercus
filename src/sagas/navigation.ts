import { put, takeLatest, call } from 'redux-saga/effects';

import * as atypes from '../constants/actionTypes';
import * as navigationApi from '../api/navigation';
import { SetCurrentPathAction } from '../types/actions';

export function* navigate({ payload }: SetCurrentPathAction): any {
  try {
    const folderContent = yield call(navigationApi.listFiles, payload.path);

    yield put({
      type: atypes.GET_FOLDER_CONTENTS_SUCCESS,
      payload: { children: folderContent },
    });
  } catch (error) {
    yield put({
      type: atypes.GET_FOLDER_CONTENTS_FAILURE,
      payload: {
        error,
      },
    });
  }
}

export function* watchNavigate(): any {
  yield takeLatest(atypes.SET_CURRENT_PATH, navigate);
}

export default [watchNavigate()];
