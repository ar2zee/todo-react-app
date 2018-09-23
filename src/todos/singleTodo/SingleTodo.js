import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table, Button } from 'semantic-ui-react'

import EditTodo from '../components/editTodo'
import TodoRow from '../components/todoRow';
import * as TodoActions from '../actions/todoActions'

class SingleTodo extends Component {
    
    state = {
        title: '',
        description: '',
        completed: ''
    }
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

    titleUpdater(){
        // const idFromPath = this.props.history.location.pathname.substring(1,3);
        const query = new URLSearchParams(this.props.history.location.search);
                 this.setState({ title: query.get('title'),
                                 description: query.get('description'),
                                 completed: query.get('completed')
                })
    }

    componentDidMount() {
        this.titleUpdater();
        // console.log('this.state.title: ', this.state)
    }

    // componentDidUpdate() {
    //     this.titleUpdater()
    // }
    
    
    render(props) {
        // console.log(this.props);
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.props.todos.map(t => { 
                        return (
                    <Table.Row className={getClassName(t)}>
                        <Table.Cell>{this.state.title}</Table.Cell>
                        <Table.Cell>{this.state.description}</Table.Cell>

                        <Table.Cell className="options">
                            {t.status !== 'done' && <Button className="option-buttons" color='green' onClick={t.completeTodo}>
                                <i className="fa fa-check"></i>
                            </Button>}
                            <Button className="option-buttons" color='blue' onClick={t.startEditing}>
                                <i className="fa fa-pencil"></i>
                            </Button>
                            <Button className="option-buttons" color='red' onClick={t.deleteTodo}>
                                <i className="fa fa-trash"></i>
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        )  
    }
}

const getClassName = (props) => {
    // console.log('SHOW ME PROPS: ', ...props.todos)
    
    return `
    ${props.updating
        ? "updating"
        : ""}
    ${props.completed === true 
        ? props.status = 'done' 
        : props.status = "" }    
    ${props.deleting
        ? "deleting"
        : ""}
    `
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleTodo);