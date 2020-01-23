import {ADD_TODO, COMPLETE_TODO, DELETE_TODO, ActionTypes} from '../types/redux/actionsTypes';

export const addTodo = (text: string): ActionTypes => ({
  type: ADD_TODO,
  id: Date.now(),
  text
})


export const completeTodo = (id: number): ActionTypes => ({
  type: COMPLETE_TODO,
  id
})


export const deleteTodo = (id: number): ActionTypes => ({
  type: DELETE_TODO,
  id
})