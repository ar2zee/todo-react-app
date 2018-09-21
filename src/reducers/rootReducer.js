import {combineReducers} from 'redux'
import {TodoListReducer} from '../todos/reducers/todoReducer'

//One root reducer for the whole app. 
const rootReducer = combineReducers({
    todos: TodoListReducer
})

export default rootReducer