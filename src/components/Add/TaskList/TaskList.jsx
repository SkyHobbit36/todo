import style from './TaskList.module.css'

import Task from "./Task/Task"

const data = [
  {
    value: 'Почесать жепу.'
  },
  {
    value: 'Поторгать чужую жепу.'
  },
  {
    value: 'Прочесть книгу как стать умным и научиться программировать. Прочесть книгу как стать умным и научиться программировать. Прочесть книгу как стать умным и научиться программировать. Прочесть книгу как стать умным и научиться программировать. Прочесть книгу как стать умным и научиться программировать.'
  },
]

const TaskList = () => {
  const taskList = data.map(el => <Task value={el.value}/>)

  return (
    <div className={style.list}>
      {taskList}
      {/* <Task value="Привет"/>
      <Task value="Привет"/> */}
    </div>
  )
}
export default TaskList