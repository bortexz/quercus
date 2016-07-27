import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { getFiles } from '../system/files'

import {getFilesOk, getFilesErr, GET_FILES} from '../actions/content'

function * getFilesGen (action) {
  try {
    const files = yield call(getFiles, action.path)
    yield put(getFilesOk(files))
  } catch (e) {
    yield put(getFilesErr(e.message))
  }
}

export function * filesSaga () {
  yield * takeLatest(GET_FILES, getFilesGen)
}

