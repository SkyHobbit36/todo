import style from './Task.module.css'

const Task = (props) => {
  return (
    <div className={style.task}>
      <p className={style.text}>{props.value}</p>
      <button className={style.button}>
        <div className={style.buttonContent}>
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1.64847" height="11.0647" transform="matrix(0.702972 0.711218 -0.702972 0.711218 8.30969 1.05818)" fill="white"/>
            <rect width="1.82353" height="11.0647" transform="matrix(-0.702972 0.711218 -0.702972 -0.711218 9.53003 8.86534)" fill="white"/>
          </svg>
          <div className={style.buttonText}>remove</div>
        </div>
      </button>
    </div>
  )
}
export default Task