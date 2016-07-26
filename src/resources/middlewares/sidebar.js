import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { getSidebarConfig } from '../system'

import {LOAD_SIDEBAR_ITEMS, loadItemsOk, loadItemsErr} from '../actions/sidebar'

function * getSidebarItemsGen (action) {
  try {
    const items = yield call(getSidebarConfig)
    yield put(loadItemsOk(items))
  } catch (e) {
    yield put(loadItemsErr(e.message))
  }
}

export function * sidebarSaga () {
  yield * takeLatest(LOAD_SIDEBAR_ITEMS, getSidebarItemsGen)
}
