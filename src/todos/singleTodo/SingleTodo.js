import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'


import * as TodoActions from '../actions/todoActions'
import TodoTable from '../components/todoTable';

export class SingleTodo extends Component {
    
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
        this.props.actions.markTodoAsCompleted({ ...todo, status: 'done', completed: true })
    }

    //Delete
    deleteTodo = (todo) => {
        this.props.actions.DeleteTodo(todo)
    }


    
    
    render() {

        return (
            <div >
                <h1>I MADE IT</h1>
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

export default SingleTodo;