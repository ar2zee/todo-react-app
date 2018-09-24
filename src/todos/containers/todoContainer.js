import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as TodoActions from '../actions/todoActions'
import TodoTable from '../components/todoTable';

export class TodoContainer extends Component {

    //Update
    startEditing = (id) => {
        this.props.actions.StartEditing(id)
    }
    cancelEditing = (id) => {
        this.props.actions.CancelEditing(id)
    }
    editTodo = (todo) => {
        this.props.actions.changeTodo(todo)
        return [
            ...this.props.todos,
        ]
    }
    // Mark TODO as Completed 
    completeTodo = (todo) => {
        this.props.actions.markTodoAsCompleted({ ...todo, status: 'done', completed: true, editing: false})
    }

    singleTodoOpen = (todo) => {
        console.log(todo)
        this.props.history.push({ pathname: '/' + todo.id,
                                 search: `?title=${todo.title}&description=${todo.description}&completed=${todo.completed}`
        });
    }

    //Delete
    deleteTodo = (todo) => {
        this.props.actions.DeleteTodo(todo)
    }

    //Create
    createTodo = (todo) => {
        if (todo.title.length === 0) {
            console.error('Please Enter a Value in Title Input ')
        } else {
            this.props.actions.CreateTodo(todo)
        }
    }

    render() {
        return (
            <div className="todo-container">
            
                <TodoTable
                    singleTodoOpen={this.singleTodoOpen} // NEW ONE !!!
                    todos={this.props.todos}
                    createTodo={this.createTodo}
                    cancelEditing={this.cancelEditing}
                    editTodo={this.editTodo}
                    deleteTodo = {this.deleteTodo}
                    startEditing={this.startEditing}
                    completeTodo = {this.completeTodo}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);