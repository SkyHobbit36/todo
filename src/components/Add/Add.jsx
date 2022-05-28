import React, { useState } from 'react'
import style from './Add.module.css'

const Add = (props) => {
  const refInput = React.createRef()
  const refAlert = React.createRef()
  const [addMessage, setAddMessage] = useState()

  const updateMessage = (event) => { 
    setAddMessage(event.target.value)
    
    // props.updateAddMessage(refInput.current.value)
  }

  const submit = (event) => {
    event.preventDefault()

  
    if(refInput.current.value !== '') {
      props.addTask(refInput.current.value)
      refInput.current.value = ''
      setAddMessage('')
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