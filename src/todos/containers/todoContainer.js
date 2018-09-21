import React, { Component } from 'react';
import * as TodoActions from '../actions/todoActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import TodoTable from '../components/todoTable';



export class TodoContainer extends Component {


    // Todo Container methods dispatch the actions to the reducer functions. Ordered by CRUD Order

    //Create
    createTodo = (todo) => {
        // console.log('[todoContainer.js] createTodo', this.props.actions.CreateTodo(todo))
        this.props.actions.CreateTodo(todo)
    }


    // No methods for reading, the first loading of data is done in App.js where the
    // getTodo Action is dispatched

    //Update
    startEditing = (id) => {
        this.props.actions.StartEditing(id)
    }
    cancelEditing = (id) => {
        this.props.actions.CancelEditing(id)
    }
    editTodo = (todo) => {
        const newDescription = todo.description;
        this.props.actions.changeTodo(todo)
        return [
            ...this.props.todos,
            newDescription
        ]
        
    }

    completeTodo = (todo) => {
        this.props.actions.markTodoAsCompleted({ ...todo, status: 'done', completed: true})
    }


    //Delete
    deleteTodo = (todo) => {
        this.props.actions.DeleteTodo(todo)
    }

    render() {
        return (
            <div className="todo-container">
                <TodoTable
                    deleteTodo = {this.deleteTodo}
                    todos={this.props.todos}
                    createTodo={this.createTodo}
                    startEditing={this.startEditing}
                    cancelEditing={this.cancelEditing}
                    editTodo={this.editTodo}
                    completeTodo = {this.completeTodo}
                />
            </div>
        );
    }
}



// This maps the state to the property of the component

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todos
    }
}

// This maps the dispatch to the property of the component

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

// The connect function connects the Redux Dispatch and state to the Todo Container Component.
// Without this the Component wont be functional.

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);