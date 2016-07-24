import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import content from './reducers/content'
import App from './components/app/app.jsx'

let store = createStore(content)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
)

