import React, {createRef} from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleComplite } from '../../../store/slices/todoSlice'
import Button from '../../Button/Button'
import style from './Task.module.css'
import TaskText from './TaskText'

const Task = (props) => {
  const dispatch = useDispatch()
  const refTask = createRef()
  const labelId = 'task' + props.id
  const del = () => {
    refTask.current.classList.add(style.hideAnimation)

    setTimeout(() => {
      refTask.current.classList.remove(style.hideAnimation)
      dispatch(deleteTask({
        id: props.id
      }))
    }, 300)
  }

  const toggle = () =>{
    refTask.current.classList.add(style.hideAnimation)
    setTimeout(() => {
      refTask.current.classList.remove(style.hideAnimation)
      dispatch(toggleComplite({
        id: props.id
      }))
    }, 250)
  }

  return (
    <div className={style.task} ref={refTask}>
      
      <input type="checkbox" id={labelId} checked={props.completed} onChange={toggle} hidden/> 
      <label className={style.checkbox} htmlFor={labelId}>
        <div className={style.checkboxContent}>
          <svg width="10" height="10" viewBox="0 0 32 32" fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className={style.checkboxEnable}>
            <polygon points="11.941,28.877 0,16.935 5.695,11.24 11.941,17.486 26.305,3.123 32,8.818 " />
          </svg>
        </div>
      </label>
      <TaskText value={props.value} id={props.id} />
      <Button text="remove" onClick={del} className={style.delete}>
        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1.64847" height="11.0647" transform="matrix(0.702972 0.711218 -0.702972 0.711218 8.30969 1.05818)" fill="white" />
          <rect width="1.82353" height="11.0647" transform="matrix(-0.702972 0.711218 -0.702972 -0.711218 9.53003 8.86534)" fill="white" />
        </svg>
      </Button>
    </div>
  )
}
export default Task