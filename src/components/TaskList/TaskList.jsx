import style from './TaskList.module.css'
import Task from "./Task/Task"

const TaskList = (props) => {
  return (
    <div className={style.list}>
      {
      props.state.data
          .map((el,i) => <Task 
                            value={el.value} 
                            complited={el.complited} 
                            id={i} 
                            key={i}
                            deleteTask={props.deleteTask}
                          />)
          .reverse()}
    </div>
  )
}
export default TaskList