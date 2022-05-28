import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/slices/todoSlice'
import style from './Add.module.css'

const Add = () => {
  const [addMessage, setAddMessage] = useState()
  const dispatch = useDispatch()

  const refInput = React.createRef()
  const refAlert = React.createRef()

  // const savedAddMessage = localStorage.getItem('addMessage') || ''
  useEffect(()=> {
    setAddMessage(localStorage.getItem('addMessage') || '')
  },[])

  const updateMessage = (event) => { 
    const value = event.target.value
    setAddMessage(value)
    localStorage.setItem('addMessage', value)
  }

  const submit = (event) => {
    event.preventDefault()
  
    if(refInput.current.value !== '') {
      dispatch(addTask({ 
        value: refInput.current.value
      }))
      refInput.current.value = ''
      setAddMessage('')
      localStorage.setItem('addMessage', '')
    } else {
      refAlert.current.classList.remove(style.hide)
      refInput.current.classList.add(style.hide)
    }
  }
  const hideAlert = () => {
    refAlert.current.classList.add(style.hide)
    refInput.current.classList.remove(style.hide)
    refInput.current.focus()
  }
  
  return (
    <form className={style.add} onSubmit={submit}>
      <input 
        className={style.input} 
        type="text" 
        placeholder="New task" 
        value={addMessage || ''} 
        onChange={updateMessage}
        ref={refInput}
      />
      <div className={`${style.alert} ${style.hide}`} ref={refAlert} onClick={hideAlert}>Please, enter some text.</div>
      <button className={style.button} type='submit'>Add</button>
    </form>
  )
}

export default Add;