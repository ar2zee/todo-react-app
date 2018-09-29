import { takeEvery } from 'redux-saga/effects';
import * as sagasAction from './todoSagas';
import * as actionTypes from '../actions/todoActions';

function* allTodosSagasAction() {
    yield takeEvery(actionTypes.GET_TODOS, sagasAction.GetTodos);
    yield takeEvery(actionTypes.CREATE_TODO, sagasAction.CreateTodo);
    yield takeEvery(actionTypes.UPDATE_TODO, sagasAction.ChangeTodo);
    yield takeEvery(actionTypes.DELETE_TODO, sagasAction.DeleteTodo);
    yield takeEvery(actionTypes.COMPLETE_TODO, sagasAction.MarkTodoAsCompleted);
}

export default allTodosSagasAction;