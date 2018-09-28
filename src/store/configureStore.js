import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'


// Import the root reducer
import rootReducer from '../reducers/rootReducer'

// Create the redux logging middleware 
const loggerMiddleware = createLogger() 

// PreloadState is the initial State.
export function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,

    //Apply the middleware usign the Redux's provided applymiddleware function
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware // console.log utilit
    )
  )
}