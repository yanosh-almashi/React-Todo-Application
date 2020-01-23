export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO'




interface addTodoAction {
  type: typeof ADD_TODO;
  id: number;
  text: string;
}


interface completeTodoAction {
  type: typeof COMPLETE_TODO;
  id: number;
}


interface deleteTodoAction {
  type: typeof DELETE_TODO;
  id: number;

}


export type ActionTypes = addTodoAction | completeTodoAction | deleteTodoAction;