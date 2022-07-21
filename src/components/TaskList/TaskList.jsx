import React from 'react'
import style from './TaskList.module.css'
import Task from './Task/Task'
import { useSelector } from 'react-redux'

const TaskList = () => {
  const todosNotComplited = []
  const todosComplited = []

  useSelector(state => state.todos.todos).forEach((el, i) => {
    const task = <Task
      value={el.value}
      complited={el.complited}
      id={i}
      key={i}
    />
    if (el.complited) {
      todosComplited.push(task)
    } else{
      todosNotComplited.push(task)
    }
  })
    
  return (
    <div className={style.list}>
      <h2 className={`${style.heading} ${style.heading_task}`}>Tasks</h2>
      {todosNotComplited.reverse()}
      <h2 className={style.heading}>Complited</h2>
      {todosComplited.reverse()}
    </div>
  )
}
export default TaskList