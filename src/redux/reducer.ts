import {ActionTypes, ADD_TODO, COMPLETE_TODO, DELETE_TODO} from '../types/redux/actionsTypes';
import { State}  from '../types/redux/reducerTypes';
import { TodoItem }  from '../types/types';



export const initialState: State = {
  tasks: []
}


export const reducer = (state:State = initialState, action:ActionTypes) => {
  switch(action.type) {
    case ADD_TODO: 
      return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    };

    case COMPLETE_TODO : 
    return {
      ...state,
      tasks: [...state.tasks].map(
        (item: TodoItem) => {
          if (action.id === item.id) {
            item.completed = !item.completed;
          }
          return item;
        }
      )
    }

    case DELETE_TODO : 
    return {
      ...state,
      tasks: state.tasks.filter((item: TodoItem) => {
        return item.id !== action.id;
      })
    };
    default: 
      return state;
  }

}