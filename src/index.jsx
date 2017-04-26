import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './app'

function render() {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>
    , document.querySelector('#root'),
  )
}

if (module.hot) { module.hot.accept('./app', render) }

render()
