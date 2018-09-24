import React from 'react';
// import {Table} from 'semantic-ui-react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import TodoRow from './todoRow'
import EditTodo from './editTodo'


const TodoTable = (props) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>

                {/* This maps the todos recieved as a prop  */}
                {props.todos.map(t => {  
                        // If the todo is being edited, EditTodo Component is rendered here
                        if (t.editing) {
                            return <EditTodo
                                editTodo={props.editTodo}
                                cancelEditing={e => props.cancelEditing(t.id)}
                                key={t.id}
                                todo={t}/>
                        } else {
                            // If the todo is not being edited the TodoRow component is returned
                            return <TodoRow
                                todo={t}
                                key={t.id}
                                completeTodo={e => props.completeTodo(t)}
                                singleTodoOpen={e => props.singleTodoOpen(t)}
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

export default TodoTable;