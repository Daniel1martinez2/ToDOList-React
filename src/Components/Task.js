import React, {useContext, useState} from 'react'; 
import TaskContext from '../store/task-context'; 
import classes from './Task.module.css'; 
const Task = props => {
  const taskCtx = useContext(TaskContext); 
  //setTaskValue
  const [taskText, setTaskText] = useState(props.title);
  const handleInputText = (event) => {
    let newText = event.target.value; 
    setTaskText(newText); 
    taskCtx.setTaskValue(props.id, newText); 
  }
  return(
    <div className={classes.task}>
      <div className={classes['task__visible-actions']}>
      <button className={classes['task__check']} onClick={()=> taskCtx.setTaskState(props.id)} >
        <svg className={`bi bi-check-square ${props.state === 'completed' ? classes['task__completed'] : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
        </svg>
        
        <svg className={`bi bi-check-square ${props.state === 'active' ? classes['task-active'] : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        </svg>
      </button>
      <input type="text" value={taskText} onChange={handleInputText} className={`${classes['task__title']} ${props.state === 'completed' ? classes['task__title--completed']: ''}`}/>
      </div>
      <button className={classes['task__delete']} onClick={ () => taskCtx.deleteTask(props.id)} >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
        </svg>
      </button>
    </div>
  ); 
}
export default Task; 
