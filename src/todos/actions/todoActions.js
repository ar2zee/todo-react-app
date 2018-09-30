//Import the Todo API 
// import { TodoApi } from "../../api/todoApi";

// These are the action type constants. Ordered by CRUD order. 

//Create
export const CREATE_TODO = '[Todo] CREATE_TODO' 
export const CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS' 
export const CREATE_TODO_ERROR = '[Todo] CREATE_TODO_ERROR' 


//Read
export const GET_TODOS = '[Todo] GET_TODOS' 
export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS' 
export const GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR' 


//Update
export const START_EDITING ='[Todo] START_EDITING'
export const CANCEL_EDITING = '[Todo] CANCEL_EDITING'

export const UPDATE_TODO = '[Todo] UPDATE_TODO' 
export const UPDATE_TODO_SUCCESS = '[Todo] UPDATE_TODO_SUCCESS' 
export const UPDATE_TODO_ERROR = '[Todo] UPDATE_TODO_ERROR' 

export const COMPLETE_TODO = 'COMPLETE_TODO'
export const COMPLETE_TODO_SUCCESS = 'COMPLETE_TODO_SUCCESS'


//Delete
export const DELETE_TODO = '[Todo] DELETE_TODO' 
export const DELETE_TODO_SUCCESS = '[Todo] DELETE_TODO_SUCCESS' 
export const DELETE_TODO_ERROR = '[Todo] DELETE_TODO_ERROR' 


export const GetTodos = () => ({
    type: GET_TODOS
})

export const CreateTodo = (todo) => ({
    type: CREATE_TODO,
    todo
});

export const DeleteTodo = (id) => ({
    type: DELETE_TODO,
    id
});

export const MarkTodoAsCompleted = (id) => ({
    type: COMPLETE_TODO,
    id
});

export const ChangeTodo = (id,todo) => ({
    type: UPDATE_TODO,
    id,
    todo: id
});


// //Updates
export function StartEditing(id) {
    return {
        type: START_EDITING,
        id,
    }
}
export function CancelEditing(id) {
    return {
        type: CANCEL_EDITING,
        id
    }
}

// // Change Todo
// export function changeTodo(todo) {
//     return (dispatch, getState) => {
//         //Multiple actions can be sent usign the Redux-Thunk middleware
//         dispatch({
//             type: UPDATE_TODO,
//             todo
//         })
//         TodoApi.changeTodo(todo).then(res => {
//             dispatch(ChangeTodoSuccess(res))
//         })
//     }
// }
// export function ChangeTodoSuccess(todo) {
//     const newData = JSON.parse(todo.config.data);
//     return {
//         type: UPDATE_TODO_SUCCESS,
//         todo,
//         id: newData.id
//     }
// }

