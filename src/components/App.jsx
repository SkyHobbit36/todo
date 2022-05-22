import style from './App.module.css'
import logo from '../assets/logo.png'
import Add from './Add/Add';
import TaskList from './Add/TaskList/TaskList';

const App = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.app}>
        <div className={style.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={style.todo}>
          <Add />
          <TaskList />
        </div>
      </div>
    </div>

  );
}

export default App;
