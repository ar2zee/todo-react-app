import React, {Component} from 'react';

// import {Button, Table} from 'semantic-ui-react'
// import {Input} from 'semantic-ui-react'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';



class EditTodo extends Component {
    constructor(props) {
        super(props);
        // If props.todo exists this component is used to  Edit a Todo, 
        // else this is a Create New Todo Component
        if (this.props.todo) {
            this.state = {
                ...this.props.todo
            }
        } else {
            this.state = {
                ...this.emptyTodo()
            }
        }
    }

    //Initializes a Empty Todo Object
    emptyTodo = () => {
        return {title: "", description: "" }
    }

    // Input change handling methods
    changeNewTitle = (event) => {
        this.setState({title: event.target.value})
    }
    changeNewDescription = (event) => {
        this.setState({description: event.target.value})
    }

    // Form submission methods
    createTodo = (event) => {
        this.resetTodo()
        this.props.createTodo(this.state)
    }
    editTodo = (event) => {
        this.props.editTodo(this.state)
    }

    // Modifying the inputs indirectly methods
    resetTodo = () => {
        this.setState({title: "", description: ""})
    }
    cancelEditing = () => {
        this.props.cancelEditing();
    }


    render() {
        return (
            <TableRow>
                <TableCell >
                    <Input 
                        placeholder='Title'
                        value={this.state.title}
                        onChange={this.changeNewTitle} />
                </TableCell>

                <TableCell>
                    <Input
                        placeholder='Description'
                        onChange={this.changeNewDescription}
                        value={this.state.description} />
                </TableCell>

                {/* The options component takes the inputs and decide if It's an option for a Edit Todo or Add New Todo */}
                <Options
                    todo={this.props.todo}    
                    editTodo={this.editTodo}
                    createTodo={this.createTodo}
                    resetTodo={this.resetTodo}
                    cancelEdit={this.cancelEditing}/>
            </TableRow>
        )
    }
}

export default EditTodo;

// The option component decides the component usage
const Options = (props) => {
    if (props.todo && props.todo.editing) {
        return EditOptions(props);
    } else {
        return AddOptions(props);
    }
}

// EditOptions and AddOptions  maps their events to the state events of their parent compoent through the props
const EditOptions = (props) => {
    return (
        <TableCell>
            <Button color='primary' onClick={props.editTodo}>
                Edit
            </Button>
            < Button color='secondary' onClick={props.cancelEdit}>
                Cancel
            </Button>
        </TableCell>
    );
}


const AddOptions = (props) => {
    return (
        <TableCell>
            <Button color='primary' onClick={props.createTodo}>
                Create
            </Button>
            < Button color='secondary' onClick={props.resetTodo}>
                Reset
            </Button>
        </TableCell>
    );
}

