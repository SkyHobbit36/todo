import style from './TaskList.module.css'
import Task from "./Task/Task"

const TaskList = (props) => {
  return (
    <div className={style.list}>
      {props.state.data.map((el,i) => <Task value={el.value} id={i} key={i} deleteTask={props.deleteTask}/>)}
    </div>
  )
}
export default TaskList