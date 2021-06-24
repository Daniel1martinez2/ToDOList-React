import React , {useContext} from 'react'; 
import TaskContext from '../store/task-context';
import classes from './Filters.module.css'; 
const Filters = props => {
  const taskCtx = useContext(TaskContext);
  const btnClass = (currentFil) =>  `${classes['actions__btn']} ${taskCtx.filter === currentFil ? classes['actions__btn--active'] : '' }`
  const activeTaskLength = taskCtx.list.filter(item=> item.state === 'active').length; 
  return(
    <section className={classes['actions']}>
        <h3 className={classes['actions__summary']}> <strong className={classes['total']}>{activeTaskLength}</strong> items left</h3>
        <div className={classes['filters']}>
          <button className={btnClass('all')} onClick={taskCtx.filterAll} >All</button>
          <button className={btnClass('active')} onClick={taskCtx.filterActive} >Active</button>
          <button className={btnClass('completed')} onClick={taskCtx.filterCompleted} >Completed</button>
        </div>
      </section>
  ); 
}
export default Filters; 
