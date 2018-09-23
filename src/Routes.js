import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// The Todo Container Component
import TodoContainer from './todos/containers/todoContainer'
import SingleTodo from './todos/singleTodo/SingleTodo';


const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                {/* It's setup at the default index route */}
                <Switch>
                <Route exact path="/" component={TodoContainer} />
                <Route path={ '/:id'} exact component={SingleTodo} /> 
                </Switch>
            </Switch>
        </BrowserRouter>
    )
}

export { Routes }