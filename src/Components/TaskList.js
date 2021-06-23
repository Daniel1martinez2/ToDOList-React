import React, {useContext} from 'react'; 
import TaskContext from '../store/task-context'; 
import Task from './Task'; 
const TaskList = props => {
  const taskCtx = useContext(TaskContext); 

  return(
    <section>
      {taskCtx.list.map(task => <Task key={task.id} id={task.id} title={task.title} state={task.state} />) }    
    </section>
  ); 
}
export default TaskList;