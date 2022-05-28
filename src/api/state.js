import data from './data.json'

let state = {
  data
}

let rerenderTree = () => { }

const addTask = (value) => {
  state.data.push({ value: value })
  rerenderTree()
}

const deleteTask = (id) => {
  state.data = state.data.filter((el, i) => i !== id)
  rerenderTree()

}

const subscribe = (observer) => {
  rerenderTree = observer
}

export { state, addTask, subscribe, deleteTask }