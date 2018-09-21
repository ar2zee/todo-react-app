import React from 'react';

import {Table} from 'semantic-ui-react'
import TodoRow from './todoRow'
import EditTodo from './editTodo'


// TodoTable is a Stateless component
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

                {/* This maps the todos recieved as a prop */}

                {props
                    .todos
                    .map(t => {
                        
                        // console.log(props.editTodo)
                        // If the todo is being edited, EditTodo Component is rendered here

                        if (t.editing) {
                            return <EditTodo
                                editTodo={props.editTodo}
                                cancelEditing={e => props.cancelEditing(t.id)}
                                key={t.id}
                                todo={t}/>
                        } else {

                            // Is the todo is not being edited the TodoRow stateless component is returned
                            // console.log('[Already there]',t.map(newT => newT.id))
                            // console.log('[Already there]', t)
                            return <TodoRow
                                todo={t}
                                required
                                key={t.id}
                                completeTodo={e => props.completeTodo(t)}
                                startEditing={e => props.startEditing(t.id)}
                                deleteTodo={e=> props.deleteTodo(t)}
                            />
                        }
                    })}
                
                {/* This EditTodo component is used as a Create new Todo Component */}
                {/* Thus by using the same component for both use, we can reuse a lot of the codes */}
                
                <EditTodo createTodo={props.createTodo} />
            </Table.Body>

        </Table>
    )
}

export default TodoTable;