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
    changeTodo = (todo) => {
        this.props.actions.ChangeTodo({ ...todo,  editing: false })
    }
        
    // Mark TODO as Completed 
    completeTodo = (todo) => {
        this.props.actions.MarkTodoAsCompleted({ ...todo, status: 'done', completed: true, editing: false})
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
                    todos={this.props.todos}
                    createTodo={this.createTodo}
                    cancelEditing={this.cancelEditing}
                    changeTodo={this.changeTodo}
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