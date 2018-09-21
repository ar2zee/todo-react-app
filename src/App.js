import React from 'react';
import { Provider } from 'react-redux'
// Import the ConfigureStore that holds the initial Configuration
import { configureStore } from './store/configureStore'

import './App.css';
// Import the Routes component, which contains our Route setup
import { Routes } from './Routes'
import * as TodoActions from './todos/actions/todoActions'


// Create a Store from the Configuration
const store = configureStore()


// fetched from the server at the start of the app
store.dispatch(TodoActions.GetTodos())

const App = (props) => {
  return (
      <Provider store={store} >
        <Routes />
      </Provider>
  )
}

export default App;
