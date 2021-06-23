import React, {useReducer} from 'react'; 
import TaskContext from './task-context';
const ACTIONS = {
  NEW_TASK: 'new-task',
  EDIT_TASK_TITLE: 'edit-text'
}
const defaultState = {
  list: [],
  filter: 'all',
}
const taskReducerCentral = (currentState, action) =>{
  switch (action.type){
    case ACTIONS.NEW_TASK: 
      return {
        list: [action.payLoad.task, ...currentState.list],
        filter: currentState.filter,
      }
    case ACTIONS.EDIT_TASK_TITLE:
      
      return {
        list: currentState.list.map( task => {
          if(task.id === action.payLoad.id){
            return {...task, title: action.payLoad.text}
          }
          return task; 
        }),
        filter: currentState.filter,
      }
    default:
      return defaultState; 
  }
}
const TaskProvider = props => {
  const handleNewTask = (task) => {
    dispatchTask({type: ACTIONS.NEW_TASK, payLoad:{task: task}})
  }
  const handleFilterAll = () => {

  }
  const handleFilterActive = () => {

  }
  const handleFilterCompleted = () => {

  }
  const handleTaskValue = (id, text) => {
    dispatchTask({type: ACTIONS.EDIT_TASK_TITLE, payLoad:{id: id, text: text}}); 
    console.log(taskListState.list);

  }

  const [taskListState, dispatchTask] = useReducer(taskReducerCentral,defaultState)
  const taskContextData = {
    list: taskListState.list,
    filter: 'all',
    addTask: handleNewTask,
    // filterAll: () => {},
    // filterActive: () => {},
    // filterCompleted: () => {},
    // setTaskState: (id) => {},
    setTaskValue: handleTaskValue,
    // deleteTask: (id) => {},
    // selectAll: () => {}
  }
  return (
    <TaskContext.Provider value={taskContextData}>
      {props.children}
    </TaskContext.Provider>
  ); 
}
export default TaskProvider; 
