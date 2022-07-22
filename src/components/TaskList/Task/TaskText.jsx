import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTask } from '../../../store/slices/todoSlice'
import Button from '../../Button/Button'
import style from './Task.module.css'

const TaskText = (props) => {
  const dispatch = useDispatch()
  const textRef = useRef()
  const [isEditable, setEditable] = useState(false)
  const [hidden, setHidden] = useState(true)

  const toggleEditable = () => {
    setEditable(!isEditable)
    console.log(textRef.current)
    if (isEditable) {
      dispatch(updateTask({
        id: props.id,
        value: textRef.current.textContent
      }))
    }
  }
  
  const onOver = () => {
    setHidden(false)
  }
  const onOut = () => {
    setHidden(true)
  }

  useEffect(() => {
    textRef.current.focus()
  }, [isEditable])

  return (
    <div  className={`${style.text} ${isEditable && style.textFocus}`} onMouseOver={onOver} onMouseOut={onOut} >
      <p contentEditable={isEditable} suppressContentEditableWarning={true} ref={textRef}>{props.value}</p>

      <Button text={isEditable ? 'save' : 'edit'} onClick={toggleEditable} className={`${style.edit} ${hidden && !isEditable && style.hidden}`}>
        {isEditable ?
          <svg width="10" height="10" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
            <polygon points="11.941,28.877 0,16.935 5.695,11.24 11.941,17.486 26.305,3.123 32,8.818 " />
          </svg> :
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4969 1.56969C12.1635 0.903115 13.2442 0.903114 13.9108 1.56969V1.56969C14.5774 2.23627 14.5774 3.317 13.9108 3.98358L12.556 5.33837L10.1421 2.92448L11.4969 1.56969Z" fill="#D9D9D9" />
            <rect x="9.16846" y="3.89835" width="3.41375" height="9.05334" transform="rotate(45 9.16846 3.89835)" fill="white" />
            <path d="M2.09741 10.9694L4.5113 13.3833L1.5032 13.9775L2.09741 10.9694Z" fill="white" />
          </svg>
        }
      </Button>
    </div>
  )
}
export default TaskText