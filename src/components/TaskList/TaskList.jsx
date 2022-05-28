import style from './TaskList.module.css'
import Task from "./Task/Task"
import { useSelector } from 'react-redux'

const TaskList = () => {
  const todosNotComlited = []
  const todosComlited = []
  useSelector(state => state.todos.todos).forEach((el, i) => {
    const task = <Task
      value={el.value}
      complited={el.complited}
      id={i}
      key={i}
    />
    if (el.complited) {
      todosComlited.push(task)
    } else{
      todosNotComlited.push(task)
    }
    
  })
    

  return (
    <div className={style.list}>
      {todosNotComlited.reverse()}
      <h2 className={style.heading}>Complited</h2>
      {todosComlited.reverse()}
    </div>
  )
}
export default TaskList