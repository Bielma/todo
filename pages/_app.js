import Layout from '../components/Layout'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'
//import 'bootstrap/dist/css/bootstrap.min.css'

//const composeEnhancers =
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const initalState = {
    todoList: [],
    option: 'all',
    todo: {},
    date: '',

}

const store = createStore(reducer, initalState)

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
        <Layout >
            <Component {...pageProps} />
        </Layout >
        </Provider>
    )
}

export default MyApp