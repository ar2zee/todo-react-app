import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <div>
        <form>
            <label>Task</label>
            <input type="text" name="task" required placeholder="Type your task here" />
            <label>Description</label>
            <input type="text" name="description" required placeholder="Type your description here" />
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default TodoList;