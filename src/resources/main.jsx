import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// Reducers
import Reducers from './reducers'

// Sagas
import { filesSaga } from './middlewares/files'
import { sidebarSaga } from './middlewares/sidebar'

// App component
import App from './components/app/app.jsx'

import { getFiles } from './actions/content'
import { loadItems } from './actions/sidebar'

import { getHomeDir } from './system'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
    Reducers,
    applyMiddleware(sagaMiddleware)
  )

sagaMiddleware.run(filesSaga)
sagaMiddleware.run(sidebarSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
)

store.dispatch(loadItems())
store.dispatch(getFiles(getHomeDir()))
