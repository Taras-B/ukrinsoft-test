import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter basename='ukrinsoft-test'>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals()
