import style from './App.module.css'
import logo from '../assets/logo.png'
import Add from './Add/Add';
import TaskList from './TaskList/TaskList';

const App = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.app}>
        <div className={style.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={style.todo}>
          <Add 
            addTask={props.addTask}
            message={props.state.addTaskMessage} 
          />
          <TaskList 
            state={props.state}
            deleteTask={props.deleteTask}
          />
        </div>
      </div>
    </div>

  );
}

export default App;
