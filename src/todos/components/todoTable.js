import React from 'react';
// import {Table} from 'semantic-ui-react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

import TodoRow from './todoRow'
import EditTodo from './editTodo'

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        fontSize: 24,
    }
}))(TableCell);

const styles = theme => ({
    table: {
        minWidth: 700,
        width: '100%',
        overflowX: 'auto',
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

const TodoTable = (props) => {
    const { classes } = props;
    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.row}>
                    <CustomTableCell>Title</CustomTableCell>
                    <CustomTableCell>Description</CustomTableCell>
                </TableRow>
            </TableHead>
            <TableBody>

                {/* This maps the todos recieved as a prop  */}
                {props.todos.map(t => {  
                        // If the todo is being edited, EditTodo Component is rendered here
                        if (t.editing) {
                            return <EditTodo
                                changeTodo={props.changeTodo}
                                cancelEditing={e => props.cancelEditing(t.id)}
                                key={t.id}
                                todo={t}/>
                        } else {
                            // If the todo is not being edited the TodoRow component is returned
                            return <TodoRow
                                todo={t}
                                key={t.id}
                                completeTodo={e => props.completeTodo(t)}
                                startEditing={e => props.startEditing(t.id)}
                                deleteTodo={e=> props.deleteTodo(t)}/>
                        }
                    })}
                
                {/* This EditTodo component is used as a Create new Todo Component */}
                <EditTodo createTodo={props.createTodo} />
            </TableBody>
        </Table>
    )
}

export default withStyles(styles)(TodoTable);