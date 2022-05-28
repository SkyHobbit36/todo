import { createSlice } from '@reduxjs/toolkit'
import data from '../data.json'

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: data.map(el => ({
      ...el,
      complited: el.complited === 'true'
    })),
  },
  reducers: {
    addTask: (state, action) => {
      state.todos.push({
        value: action.payload.value,
        complited: false,
      })
    },

    deleteTask: (state, action) => {
      state.todos = state.todos.filter((el, i) => i !== action.payload.id)
    },

    toggleComplite: (state, action) => {
      state.todos.map((el, i) => {
        if (i !== action.payload.id) return el
        el.complited = !el.complited
        return el
      })
    }
  }
})

export const { addTask, deleteTask, toggleComplite } = todoSlice.actions

export default todoSlice.reducer