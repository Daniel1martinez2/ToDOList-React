import React, {useContext} from 'react'; 
import TaskContext from '../store/task-context'; 
import Task from './Task'; 
const TaskList = props => {
  const taskCtx = useContext(TaskContext); 
  const taskItem = (task) =>  <Task key={task.id} id={task.id} title={task.title} state={task.state} />; 
  let filteredList = taskCtx.list.map(task => taskItem(task)); 

  switch (taskCtx.filter){
    case 'all':   
      filteredList = taskCtx.list.map(task => taskItem(task)); 
    break;
    case 'active':   
      filteredList = taskCtx.list.filter(i => i.state === 'active').map(task => taskItem(task)); 
    break;
    case 'completed':   
      filteredList = taskCtx.list.filter(i => i.state === 'completed').map(task => taskItem(task)); 
    break;
    default: filteredList = taskCtx.list.map(task => taskItem(task));
  }
  return(
    <section>
      {filteredList}    
    </section>
  ); 
}
export default TaskList;