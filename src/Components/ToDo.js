import classes from './ToDo.module.css'; 
import NewTask from './NewTask'; 
import TaskList from './TaskList'; 
import Filters from './Filters';
const ToDo = props => {
  return (
    <main className={classes.todo}>
      <NewTask />
      <TaskList />
      <Filters />
    </main>
  ); 
}
export default ToDo; 