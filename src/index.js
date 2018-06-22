import React from 'react'
import ReactDOM from 'react-dom'
// import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.js'
// import { Provider } from 'react-redux'
// import reducers from './redux/reducers'
// import ReduxPromise from 'redux-promise'
// const middlewares = [ReduxPromise]
// const store = createStore(reducers, applyMiddleware(...middlewares))
import './css/styles.css'

ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
document.getElementById('app')
)
