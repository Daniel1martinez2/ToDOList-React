import classes from './Filters.module.css'; 
const Filters = props => {
  return(
    <section className={classes['actions']}>
        <h3 className={classes['actions__summary']}> <strong className={classes['total']}>3</strong> items left</h3>
        <div className={classes['filters']}>
          <button className={classes['actions__btn']}>All</button>
          <button className={classes['actions__btn']}>Active</button>
          <button className={classes['actions__btn']}>Completed</button>
        </div>
      </section>
  ); 
}
export default Filters; 