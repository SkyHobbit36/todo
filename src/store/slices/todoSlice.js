import { createSlice } from '@reduxjs/toolkit'
import data from '../data.json'

const seveTodosToLoacaleStorage = (state) => {
  localStorage.setItem('todos', JSON.stringify(state))
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: data.map(el => ({
      ...el,
      completed: el.completed === 'true'
    })),
  },
  reducers: {
    setTodos: (state) => {
      localStorage.setItem('todos', '')
      const todos = localStorage.getItem('todos')

      if (!todos) {
        seveTodosToLoacaleStorage(state.todos)
      } else {
        state.todos = JSON.parse(localStorage.getItem('todos'))
      }
    },

    addTask: (state, action) => {
      state.todos.push({
        value: action.payload.value,
        completed: false,
      })
      seveTodosToLoacaleStorage(state.todos)
    },

    deleteTask: (state, action) => {
      state.todos = state.todos.filter((el, i) => i !== action.payload.id)
      seveTodosToLoacaleStorage(state.todos)
    },

    toggleComplite: (state, action) => {
      state.todos.map((el, i) => {
        if (i !== action.payload.id) {
          return el
        }

        el.completed = !el.completed
        return el
      })
      seveTodosToLoacaleStorage(state.todos)
    },

    deleteComplited(state) {
      state.todos = state.todos.filter(el => !el.completed)
      seveTodosToLoacaleStorage(state.todos)
    },

    completeAllTasks(state) {
      state.todos = state.todos.map(el => {
        if (!el.completed) {
          el.completed = true
        }

        return el
      })
      seveTodosToLoacaleStorage(state.todos)
    }
  }
})

export const { addTask, deleteTask, toggleComplite, setTodos, completeAllTasks, deleteComplited } = todoSlice.actions

export default todoSlice.reducer