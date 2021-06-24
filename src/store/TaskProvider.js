import React, {useReducer} from 'react'; 
import TaskContext from './task-context';
const ACTIONS = {
  NEW_TASK: 'new-task',
  EDIT_TASK_TITLE: 'edit-text',
  SET_TASK_STATE: 'set-state-task',
  DELETE_TASK: 'delete-task',
  FILTER_ALL: 'filter-all',
  FILTER_ACTIVE: 'filter-active',
  FILTER_COMPLETED: 'filter-completed',
  SELECT_ALL: 'select-all',
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
    case ACTIONS.SET_TASK_STATE: 
      return{
        list: currentState.list.map( task => {
          if(task.id === action.payLoad.id){
            return {...task, state: task.state === 'completed' ? 'active' : 'completed'}
          }
          return task; 
        }),
        filter: currentState.filter,
      }
      case ACTIONS.DELETE_TASK:
        return{
          list: currentState.list.filter(task => task.id !== action.payLoad.id),
          filter: currentState.filter,
      }
      
      case ACTIONS.FILTER_ALL:
        return{
          list: currentState.list,
          filter: 'all'
        }
      
      case ACTIONS.FILTER_ACTIVE:
        return{
          list: currentState.list,
          filter: 'active'
        }
      
      case ACTIONS.FILTER_COMPLETED:
        return{
          list: currentState.list,
          filter: 'completed'
        }
      case ACTIONS.SELECT_ALL: 

        let currentFilterArray; 

        switch (currentState.filter){
          case 'active':   
            currentFilterArray = currentState.list.map(i => {
              if(i.state === 'active'){
                return {...i, state: 'completed'}
              }
              return i; 
            });
          break;
          case 'completed':   
            currentFilterArray = currentState.list.map(i => {
              if(i.state === 'completed'){
                return {...i, state: 'active'}
              }
              return i; 
            });
          break;
          default: currentFilterArray =  currentState.list.every(listItem => listItem.state === 'completed' ) ? 
            currentState.list.map(item => {
              return { ...item, state: 'active'}
            }) 
            : 
            currentState.list.map(item => {
              return { ...item, state: 'completed'}
            }); 
        }
        return{
          list: currentFilterArray,
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
  const handleTaskValue = (id, text) => {
    dispatchTask({type: ACTIONS.EDIT_TASK_TITLE, payLoad:{id: id, text: text}}); 
  }
  const handleTaskState = (id) => {
    dispatchTask({type: ACTIONS.SET_TASK_STATE, payLoad:{id: id}})
  }
  const handleDeleteTask = (id) => {
    dispatchTask({type: ACTIONS.DELETE_TASK, payLoad:{id: id}})
  }
  const handleFilterAll = () => {
    dispatchTask({type: ACTIONS.FILTER_ALL})
  }
  const handleFilterActive = () => {
    dispatchTask({type: ACTIONS.FILTER_ACTIVE})
  }
  const handleFilterCompleted = () => {
    dispatchTask({type: ACTIONS.FILTER_COMPLETED})
  }
  const handleSelectAll = () => {
    console.log('a');
    dispatchTask({type: ACTIONS.SELECT_ALL})

  }

  const [taskListState, dispatchTask] = useReducer(taskReducerCentral,defaultState)
  const taskContextData = {
    list: taskListState.list,
    filter: taskListState.filter,
    addTask: handleNewTask,
    filterAll: handleFilterAll,
    filterActive: handleFilterActive,
    filterCompleted: handleFilterCompleted,
    setTaskState: handleTaskState,
    setTaskValue: handleTaskValue,
    deleteTask: handleDeleteTask,
    selectAll: handleSelectAll,
  }
  return (
    <TaskContext.Provider value={taskContextData}>
      {props.children}
    </TaskContext.Provider>
  ); 
}
export default TaskProvider; 
