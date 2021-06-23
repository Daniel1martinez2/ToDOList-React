import classes from './ToDo.module.css'; 
import NewTask from './NewTask'; 
import TaskList from './TaskList'; 
import Filters from './Filters';
import TaskProvider from '../store/TaskProvider';
const ToDo = props => {
  return (
    <main className={classes.todo}>
      <TaskProvider>
        <NewTask />
        <TaskList />
        <Filters />
      </TaskProvider>
    </main>
  ); 
}
export default ToDo; 