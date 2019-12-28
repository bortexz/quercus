import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import reducer from './reducer';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware({});
  const middlewares = [sagaMiddleware, logger];

  // @ts-ignore
  let reduxDevtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  const composeEnhancers =
    typeof window === 'object' && reduxDevtoolsExtension
      ? reduxDevtoolsExtension({})
      : compose;

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
