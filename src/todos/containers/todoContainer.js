import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom';

import SingleTodo from '../singleTodo/SingleTodo';
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
        this.props.actions.markTodoAsCompleted({ ...todo, status: 'done', completed: true})
    }

    singleTodoOpen = (todo) => {
        console.log(this.props.match.url)
        this.props.history.push({ pathname: '/' + todo.id });
        // return <Route path={this.props.match.url + todo.id} exact component={SingleTodo} /> 
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
                    deleteTodo = {this.deleteTodo}
                    todos={this.props.todos}
                    createTodo={this.createTodo}
                    startEditing={this.startEditing}
                    cancelEditing={this.cancelEditing}
                    editTodo={this.editTodo}
                    completeTodo = {this.completeTodo}/>

                {/* <Route path={this.props.match.url + '/:id'} exact component={SingleTodo} />  */}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoContainer));