import React from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'
import {createBrowserHistory} from 'history'


const initalState = {
    todoList: [],
    todo: {},
    option: 'all',

}

const store = createStore(reducer, initalState)
const history  = createBrowserHistory(); 


function ProviderMocks({ Component, pageProps }) {
    return (
        <Provider store={store} >
            <Layout >
                <Component {...pageProps} />
            </Layout >
        </Provider>

    )
}

export default ProviderMocks