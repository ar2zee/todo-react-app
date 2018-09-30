import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

// Import the root reducer
import rootReducer from '../reducers/rootReducer'
import allTodosSagasAction from '../todos/sagas/index'

// Create the redux logging middleware 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

// PreloadState is the initial State.
export function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    //Apply the middleware usign the Redux's provided applymiddleware function
    composeEnhancers(applyMiddleware(
      sagaMiddleware
    )
  ))
  sagaMiddleware.run(allTodosSagasAction)
  return store
}