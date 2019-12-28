import { all } from 'redux-saga/effects';

import navigationSaga from './navigation';

function* rootSaga(): any {
  yield all([...navigationSaga]);
}

export default rootSaga;
