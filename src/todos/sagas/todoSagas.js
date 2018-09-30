import { call, put } from 'redux-saga/effects';

import * as actionTypes from '../actions/todoActions'
import { TodoApi } from "../../api/todoApi";

export function* GetTodos() {
        const response = yield call(TodoApi.getTodo);
        const todos = yield response;
        yield put({ type: actionTypes.GET_TODOS_SUCCESS, todos: todos });
};

export function* CreateTodo(action) {
        const response = yield TodoApi.createTodo(action.todo);
        const todos = yield response;
        yield put({ type: actionTypes.CREATE_TODO_SUCCESS, todo: response });
        yield put({ type: actionTypes.GET_TODOS_SUCCESS, todos: todos });
};

export function* ChangeTodo(action) {
        const response = yield TodoApi.ChangeTodo(action.id);
        const todos = yield response;
        yield put({ type: actionTypes.UPDATE_TODO_SUCCESS, todo: action.id });
        yield put({ type: actionTypes.GET_TODOS_SUCCESS, todos: todos });
        yield put({ type: actionTypes.CANCEL_EDITING});
}

export function* DeleteTodo(action) { 
        const response = yield TodoApi.removeTodo(action.id)
        const todos = yield response;
        yield put({ type: actionTypes.DELETE_TODO_SUCCESS, todo: response });
        yield put({ type: actionTypes.GET_TODOS_SUCCESS, todos: todos });
};

export function* MarkTodoAsCompleted(action) {
        const response = yield TodoApi.markTodoAsCompleted(action.id)
        const todos = yield response;
        yield put({ type: actionTypes.COMPLETE_TODO_SUCCESS, todo: response });
        yield put({ type: actionTypes.GET_TODOS_SUCCESS, todos: todos });
};

