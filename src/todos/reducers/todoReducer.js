import * as TodoActions from '../actions/todoActions'

//Reducer composition for the Collection and the Individual Item

/*The collection Reducer */

export function TodoListReducer(state = [], action) {
    switch (action.type) {

        // Create
        case TodoActions.CREATE_TODO_SUCCESS: {
            const updatedState = action.todo;
                return [    
                    ...updatedState
                ];
        }
            
        //Read    
        case TodoActions.GET_TODOS_SUCCESS: {
            return action.todos.data;
        }
        
        /*handle the data by mapping it*/

        //Update    
        case TodoActions.START_EDITING: {
            return state.map(s => todo(s, action))
        }

        case TodoActions.CANCEL_EDITING: {    
            return state.map(s => todo(s, action))
        }

        case TodoActions.UPDATE_TODO: {
            return state.map(s => todo(s, action))
        }

        case TodoActions.UPDATE_TODO_SUCCESS: {
            return state.map(s => todo(s, action))
        }

        case TodoActions.COMPLETE_TODO: {
            return state.map(s => todo(s, action))
        }

        case TodoActions.COMPLETE_TODO_SUCCESS: {
            return state.map(s => todo(s, action))
        }
        
        //Delete    
        case TodoActions.DELETE_TODO: {
            return state.map(s => todo(s, action))
        }

        case TodoActions.DELETE_TODO_SUCCESS: {
            return state.filter(s => todo(s, action))
        }

        default:
            return state
    }
}

/*The individual Reducer */

const todo = (state, action) => {

    // If the mapped todo of the previous state matches with the new ID of the action, 
    // Only then proceed to the Reducer Switch case
    if (state.id !== (action.id || action.todo.id)) {
        return state;
    }

    switch (action.type) {

        case TodoActions.START_EDITING:
            {
                return {
                    ...state,
                    editing: true
                }
            }

        case TodoActions.CANCEL_EDITING:
            {
                return {
                    ...state,
                    editing: false
                }
            }

        case TodoActions.UPDATE_TODO:
            {
                return {
                    ...state,
                    ...action.todo,
                    editing: false,
                    updating: true
                }
            }

        case TodoActions.UPDATE_TODO_SUCCESS:
        {
                return {
                    ...state,
                    ...action.todo,
                    updating: false
                }
            }

        case TodoActions.COMPLETE_TODO:
            {
                return {
                    ...state,
                    ...action.todo, 
                    updating: true
                }
            }

        case TodoActions.COMPLETE_TODO_SUCCESS:
            {
                return false
            }

        case TodoActions.DELETE_TODO:
            {
                return {
                    ...state,
                    ...action.todos,
                    deleting: true
                }
            }

        case TodoActions.DELETE_TODO_SUCCESS:
            {
                return false
            }

        default:
            {
                return state;
            }
    }
}