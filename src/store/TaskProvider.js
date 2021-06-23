import React, {useReducer} from 'react'; 
import TaskContext from './task-context';
const ACTIONS = {

}
const taskReducerCentral = (currentState, action) =>{

}
const TaskProvider = props => {
  const [taskListState, dispatchTask] = useReducer(taskReducerCentral,[])
  const taskContextData = {
    // list: [],
    // filterAll: () => {},
    // filterActive: () => {},
    // filterCompleted: () => {},
    // setTaskState: (id) => {},
    // setTaskValue: (id) => {},
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
