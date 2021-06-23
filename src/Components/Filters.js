import React , {useContext} from 'react'; 
import TaskContext from '../store/task-context';
import classes from './Filters.module.css'; 
const Filters = props => {
  const taskCtx = useContext(TaskContext);
  return(
    <section className={classes['actions']}>
        <h3 className={classes['actions__summary']}> <strong className={classes['total']}>{taskCtx.list.filter(item=> item.state === 'active').length}</strong> items left</h3>
        <div className={classes['filters']}>
          <button className={classes['actions__btn']} onClick={taskCtx.filterAll} >All</button>
          <button className={classes['actions__btn']} onClick={taskCtx.filterActive} >Active</button>
          <button className={classes['actions__btn']} onClick={taskCtx.filterCompleted} >Completed</button>
        </div>
      </section>
  ); 
}
export default Filters; 