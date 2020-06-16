import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import store from './redux/store'
import App from './App'

ReactDOM.render(
    <Fragment>
        <Provider store={store}>
            <App />
        </Provider>
    </Fragment>,
    document.getElementById('root')
)
