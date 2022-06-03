import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/slices/todoSlice'
import style from './Add.module.css'

const Add = (props) => {
  const [addMessage, setAddMessage] = useState()
  const [isFixedPosition, setFixedPosotion] = useState(false)

  const dispatch = useDispatch()

  const addRef = React.createRef()
  const inputRef = React.createRef()
  const alertRef = React.createRef()

  useEffect(()=> {
    setAddMessage(localStorage.getItem('addMessage') || '')

  },[])

  const updateMessage = (event) => { 
    const value = event.target.value
    setAddMessage(value)
    localStorage.setItem('addMessage', value)
  }

  const hideAlert = () => {
    alertRef.current.classList.add(style.hide)
    inputRef.current.classList.remove(style.hide)
    inputRef.current.focus()
  }

  const submit = (event) => {
    event.preventDefault()
  
    if(inputRef.current.value !== '') {
      dispatch(addTask({ 
        value: inputRef.current.value
      }))
      
      inputRef.current.value = ''
      setAddMessage('')
      localStorage.setItem('addMessage', '')
    } else {
      alertRef.current.classList.remove(style.hide)
      inputRef.current.classList.add(style.hide)
    }

    inputRef.current.focus()
  }
  
  useEffect(()=>{

    window.addEventListener('scroll', () => {
      // const contHeight = props.appRef.current.offsetHeight
      if (window.pageYOffset >= props.appRef.current.offsetTop) {
        setFixedPosotion(true)
        // addRef.current.style.transform = `translateY(${window.pageYOffset - props.appRef.current.offsetTop})`
      } else {
        setFixedPosotion(false)
        // addRef.current.style.transform = `translateY(0)`
      }
    })
  },[props.appRef])
  
  return (
    <form className={`${style.add} ${isFixedPosition && style.fixed}`} 
        onSubmit={submit} 
        ref={addRef} 
        >
      <input 
        className={style.input} 
        type="text" 
        placeholder="New task" 
        value={addMessage || ''} 
        onChange={updateMessage}
        ref={inputRef}
      />
      <div className={`${style.alert} ${style.hide}`} ref={alertRef} onClick={hideAlert}>Please, enter some text.</div>
      <button className={style.button} type='submit'>Add</button>
    </form>
  )
}

export default Add;