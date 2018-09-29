// import React, { Component } from 'react';
// import { bindActionCreators, compose } from 'redux';
// import { connect } from 'react-redux';

// // import { Table, Button } from 'semantic-ui-react'

// // import EditTodo from '../components/editTodo'
// // import TodoRow from '../components/todoRow';
// import * as TodoActions from '../actions/todoActions'

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableHead from '@material-ui/core/TableHead';
// import Button from '@material-ui/core/Button';
// import TableRow from '@material-ui/core/TableRow';
// import TableCell from '@material-ui/core/TableCell';
// import { withStyles } from '@material-ui/core/styles';


// const CustomTableCell = withStyles(theme => ({
//     head: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//         fontSize: 24,
//     }
// }))(TableCell);

// const styles = theme => ({
//     table: {
//         minWidth: 700,
//         width: '100%',
//         overflowX: 'auto',
//     },
//     row: {
//         '&:nth-of-type(odd)': {
//             backgroundColor: theme.palette.background.default,
//         },
//     },
// });


// class SingleTodo extends Component {
    
//     state = {
//         title: '',
//         description: '',
//         completed: ''
//     }
//     //Update
//     startEditing = (id) => {
//         this.props.actions.StartEditing(id)
//     }
//     cancelEditing = (id) => {
//         this.props.actions.CancelEditing(id)
//     }
//     editTodo = (todo) => {
//         console.log('It works')
//         this.props.actions.changeTodo(todo)
//         return [
//             ...this.props.todos,
//         ]
//     }
//     // Mark TODO as Completed 
//     completeTodo = (todo) => {
//         this.props.actions.markTodoAsCompleted({ ...todo, status: 'done', completed: true, editing: false })
//         console.log(todo)
//     }

//     //Delete
//     deleteTodo = (todo) => {
//         this.props.actions.DeleteTodo(todo)
//     }

//     titleUpdater(){
//         // const idFromPath = this.props.history.location.pathname.substring(1,3);
//         const query = new URLSearchParams(this.props.history.location.search);
//                  this.setState({ title: query.get('title'),
//                                  description: query.get('description'),
//                                  completed: query.get('completed')
//                 })
//     }

//     componentDidMount() {
//         this.titleUpdater();
        
//         // console.log('this.state.title: ', this.state)
//     }

//     // componentDidUpdate() {
//     //     this.titleUpdater()
//     // }
    
    
//     render(props) {
//         const { classes } = this.props;
//         return (
//             <Table className={classes.table}>
//                 <TableHead>
//                     <TableRow className={classes.row}>
//                         <CustomTableCell>Title</CustomTableCell>
//                         <CustomTableCell>Description</CustomTableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {this.props.todos.map(t => { 
//                         return (
//                     <TableRow className={getClassName(t)} key={t.id}>
//                         <TableCell>{this.state.title}</TableCell>
//                         <TableCell>{this.state.description}</TableCell>

//                         <TableCell className="options">
//                             {t.status !== 'done' && <Button variant="contained" className="option-buttons" color='primary' onClick={t.completeTodo}>
//                                 <i className="fa fa-check"></i>
//                             </Button>}
//                             <Button variant="contained" className="option-buttons" color='default' onClick={t.startEditing}>
//                                 <i className="fa fa-pencil"></i>
//                             </Button>
//                             <Button variant="contained" className="option-buttons" color='secondary' onClick={t.deleteTodo}>
//                                 <i className="fa fa-trash"></i>
//                             </Button>
//                         </TableCell>
//                     </TableRow>
//                         )
//                     })}

//                 </TableBody>
//             </Table>
//         )  
//     }
// }

// const getClassName = (props) => {
//     // console.log('SHOW ME PROPS: ', ...props.todos)
    
//     return `
//     ${props.updating
//         ? "updating"
//         : ""}
//     ${props.completed === true 
//         ? props.status = 'done' 
//         : props.status = "" }    
//     ${props.deleting
//         ? "deleting"
//         : ""}
//     `
// }


// function mapStateToProps(state) {
//     return {
//         todos: state.todos
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(TodoActions, dispatch)
//     }
// }

// export default compose(
//     withStyles(styles, {
//         name: 'SingleTodo',
//     }),
//     connect(mapStateToProps, mapDispatchToProps),
// )(SingleTodo);
