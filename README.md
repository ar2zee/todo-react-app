# React Assessments

<img src="https://github.com/DevMountain/react-assessment/blob/master/readme-assets/1-3.png" />

In the following assessments, we will break down the process of building a to-do list. The to-do list will be capable of creating tasks, deleting tasks, updating tasks, and completing tasks. 

A task should be an object with the following properties: `id`, `title`, `description`, and `completed`.


In the assessments you will not be graded on CSS. We only ask that you make the display of information clear so that it can be graded properly. The screenshots above are only to help with visualization.

Here is the documentation for the API:

<details>

<summary> ## API Documentation </summary>

<br />

* GET - `https://practiceapi.devmountain.com/api/tasks`
  * Returns an array of all tasks.
* POST - `https://practiceapi.devmountain.com/api/tasks`
  * Creates a new task.
  * Requires a `title` property on the request body that equals a string.
  * Returns an array of all tasks.
* PATCH - `https://practiceapi.devmountain.com/api/tasks/:id`
  * Updates a task.
  * Requires an id parameter of the task you want to patch.
  * Requires a request body with a property or properties you want to update.
    * Valid properties: `title` - string, `description` - string, `completed` - boolean
  * Returns an array of all tasks.
* DELETE - `https://practiceapi.devmountain.com/api/tasks/:id`
  * Deletes a task.
  * Requires an id parameter of the task you want to delete.
  * Returns an array of all tasks.
* PUT - `https://practiceapi.devmountain.com/api/tasks/:id`
  * Marks a task as completed.
  * Requires an id parameter of the task you want to complete.
  * Returns an array of all tasks.

</details>

### Summary

In this assessment, you will create the to-do list using `create-react-app` and you will create all the logic needed to create, complete, and delete tasks. All the functionality should be available to the user on the same view.

### Functionality

* A user must be able to create a task.
  * A user must not be able to create a task with no title.
* A user must be able to delete a task.
* A user must be able to complete a task.
  * A user must be able to see a visual representation of a completed task.
  * The complete button should be disabled if the task is completed.
* A user must be able to see a list of all their tasks.
* The `add-task` input field must clear after adding a task.
* After adding a new task, the task must be added to the list of visible `tasks`.

### Technical Requirements

* Create a react app from scratch using `create-react-app`.
* Use functional components over class based components when able
* Use props instead of State
* Keep track of tasks using redux.
* Create, Complete, and Delete tasks using action creators with redux.
* A user should be able to click on a task to be taken to a detailed view of that task:
  * A user should be able to modify the title of a task.
  * A user should be able to add/modify the description of a task.
  * A user should be able to save changes to a title/description:
    * This should navigate the user to the main list of tasks after saving changes.
  * A user should be able to cancel text changes:
    * This should set the input fields' values back to their original value.
  * A user should be able to delete a task:
    * This should navigate the user back to the main list of tasks after deleting a task.
  * A user should be able to complete a task:
    * This should navigate a user back to the main list of tasks after completing a task.
* A user should be able to click on a link to be taken back to the main list of tasks from the detailed view.


### Technical Requirements

* Use Material-UI 1.0 for user interface components
* Use the API to manage tasks.
* Use `redux-saga`, `Redux`, and `isomorphic-fetch` to create, fetch, update, complete, and delete tasks.
* Use `react-router-dom` to create a new route to a detailed view of a task:
  * This route should use route parameters to know which task it is working with.
  * This route should be able to handle refreshing ( data should not be lost on refresh ).