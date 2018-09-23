import React from 'react';
import {Table} from 'semantic-ui-react'

import TodoRow from './todoRow'
import EditTodo from './editTodo'


const TodoTable = (props) => {
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>

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
            </Table.Body>
        </Table>
    )
}

export default TodoTable;