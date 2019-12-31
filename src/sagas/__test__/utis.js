import { runSaga } from 'redux-saga';

export default async function recordSaga(saga, initialAction) {
  const dispatched = [];

  await runSaga(
    {
      dispatch: action => dispatched.push(action),
    },
    saga,
    initialAction
  ).done;

  return dispatched;
}
