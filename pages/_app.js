import Layout from '../components/Layout'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'


//const composeEnhancers =
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const initalState = {
    todoList: [{
        id: 1,
        name: 'compras',
        description: 'Comprar awa',
        done: false
    },
    {
        id: 2,
        name: 'compras2',
        description: 'Comprar helado',
        done: false
    },
    ],
    todo: {},
    todoToSearch: [],

}

const store = createStore(reducer, initalState)

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store} >
            <Layout >
                <Component {...pageProps} />
            </Layout >
        </Provider>

    )
}

export default MyApp