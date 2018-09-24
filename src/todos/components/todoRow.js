import React from 'react';
// import {Button, Table} from 'semantic-ui-react'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        backgroundColor: 'purple'
    }
});

//takes the props and maps the specific events to the methods of parent component
const TodoRow = (props) => {
    const { classes } = props;
    return (
        // getClass Name assigns the class names of this element 
        <TableRow className={getClassName(props)}>
            <TableCell>{props.todo.title}</TableCell>
            <TableCell>{props.todo.description}</TableCell>

            <TableCell className="options">
                {props.todo.status !== 'done' && <Button variant="contained" className="option-buttons" color='primary' onClick={props.completeTodo}>
                    <i className="fa fa-check"></i>
                </Button>}
                <Button variant="contained" className="option-buttons" color='default' onClick={props.startEditing}>
                    <i className="fa fa-pencil"></i>
                </Button>
                <Button variant="contained" className={`${classes.button} option-buttons`}  onClick={props.singleTodoOpen}>
                    <i className="fa fa-link"></i>
                </Button>
                <Button variant="contained" className="option-buttons" color='secondary' onClick={props.deleteTodo}>
                    <i className="fa fa-trash"></i>
                </Button>
            </TableCell>
        </TableRow>
        
    );
}

// Updating, done and deleting these three states are represented with different Class Name
const getClassName = (props) => {
    return `
    ${props.todo.updating
        ? "updating"
        : ""}
    ${props.todo.completed === true 
        ? props.todo.status = 'done' 
        : props.todo.status = "" }    
    ${props.todo.deleting
        ? "deleting"
        : ""}
            `
}

export default withStyles(styles)(TodoRow);