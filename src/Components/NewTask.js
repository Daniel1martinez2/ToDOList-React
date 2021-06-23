import classes from './NewTask.module.css'; 
const NewTask = props => {
  return (
    <form className={classes['todo__form']}>
      <button type="button" className={classes['select-all']}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
          <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
        </svg>
      </button>
      <input type="text" className={classes['todo__input']} name="newTask" />
    </form>
  ); 
}
export default NewTask; 