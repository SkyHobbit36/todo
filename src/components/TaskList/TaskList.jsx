import React from 'react'
import style from './TaskList.module.css'
import Task from './Task/Task'
import { useDispatch, useSelector } from 'react-redux'
import { completeAllTasks, deleteComplited, setTodos } from '../../store/slices/todoSlice'
import { useEffect } from 'react'

const TaskList = () => {
  const dispatch = useDispatch()
  const todosNotCompleted = []
  const todosCompleted = []

  useEffect(() => {
    dispatch(setTodos())
  },[])
  
  useSelector(state => state.todos.todos).forEach((el, i) => {
    const task = <Task
      value={el.value}
      completed={el.completed}
      id={i}
      key={i}
    />
    if (el.completed) {
      todosCompleted.push(task)
    } else{
      todosNotCompleted.push(task)
    }
  })

  const completeAll = () => {
    dispatch(completeAllTasks())
  }
  const deleteAll = () => {
    dispatch(deleteComplited())
  }
    
  return (
    <div className={style.list}>
      <h2 className={`${style.heading} ${style.heading_task}`}>Tasks</h2>
      {todosNotCompleted.reverse()}
      <button onClick={completeAll} className={style.completeAll}>Complete all</button>
      <h2 className={style.heading}>Complited</h2>
      {todosCompleted.reverse()}
      <button onClick={deleteAll} className={style.deleteAll}>Delete all</button>
    </div>
  )
}
export default TaskList