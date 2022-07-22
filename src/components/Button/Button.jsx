import React from 'react'
import style from './Button.module.css'

const Button = (props) => {
  return (
    <button className={style.button + ' ' + props.className} onClick={props.onClick} contentEditable="false" suppressContentEditableWarning={true}>
      <div className={style.buttonContent}>
        {props.children}
        <div className={style.buttonText}>{props.text}</div>
      </div>
    </button>
  )
}
export default Button