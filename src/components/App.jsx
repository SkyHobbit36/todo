import style from './App.module.css'
import logo from '../assets/logo.png'
import Add from './Add/Add';
import TaskList from './TaskList/TaskList';
import React from 'react';

const App = () => {
  const appRef = React.createRef()
  return (
    <div className={style.wrapper}>
      <div className={style.app}>
        <div className={style.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={style.todo} ref={appRef}>
          <Add appRef={appRef}/>
          <TaskList />
        </div>
      </div>

      <div className={style.ocean}>
        <div className={style.wave}></div>
        <div className={style.wave}></div>
        <div className={style.wave}></div>
        <div className={style.wave}></div>
      </div>
    </div>

  );
}

export default App;
