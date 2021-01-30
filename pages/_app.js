import Layout from '../components/Layout'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import reducer from '../reducers'

const initalState = {
  todoList: [],
}

const store = createStore(reducer, initalState)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store = {store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  )
}

export default MyApp
