import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { getConfig } from '../system'

import { loadItemsOk } from '../actions/sidebar'
import { LOAD_CONFIG, loadConfigErr } from '../actions/config'
import { getFiles } from '../actions/content'

function * getConfigGen (action) {
  try {
    const json = yield call(getConfig)
    yield put(loadItemsOk(json.Sidebar))
    yield put(getFiles(json.Startpath))
  } catch (e) {
    yield put(loadConfigErr(e.message))
  }
}

export function * configSaga () {
  yield * takeLatest(LOAD_CONFIG, getConfigGen)
}
