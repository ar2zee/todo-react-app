import {HttpClient} from './httpClient' 

const API = 'https://practiceapi.devmountain.com/api'

const TODO_API = `${API}/tasks`


//Create
const createTodo = todo => {
    return HttpClient.post(TODO_API, todo)
}

//Get
const getTodo = () => {
    return HttpClient.get(TODO_API)
}

//markTodoAsCompleted
const markTodoAsCompleted = todo => {
    return HttpClient.put(`${TODO_API}/${todo.id}`)
}

// Change Todo
const changeTodo = todo => {
    return HttpClient.patch(`${TODO_API}/${todo.id}`, todo)
}

//Delete
const removeTodo = todo => {
    return HttpClient.delete(`${TODO_API}/${todo.id}`)
}


const TodoApi = { createTodo, getTodo, markTodoAsCompleted, removeTodo, changeTodo}

export {TodoApi}