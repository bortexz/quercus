import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import reducer from './reducer';

export default function configureStore() {
  const middlewares = [logger];

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
  return store;
}
