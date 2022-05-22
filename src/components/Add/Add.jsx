import style from './Add.module.css'

const Add = () => {
  return (
    <form className={style.add}>
      <input className={style.input} type="text" placeholder="New task" />
      <button className={style.button} type='submit'>Add</button>
    </form>
  )
}

export default Add;