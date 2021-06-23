import React from 'react';
const TaskContext = React.createContext({
  list: [],
  filter: 'all',
  addTask: (task)=>{},
  filterAll: () => {},
  filterActive: () => {},
  filterCompleted: () => {},
  setTaskState: (id) => {},
  setTaskValue: (id) => {},
  deleteTask: (id) => {},
  selectAll: () => {}
}); 
export default TaskContext;