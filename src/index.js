import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { client } from './api_calls/apolloClient'
import { store } from './redux/store'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)

