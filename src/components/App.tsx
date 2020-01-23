import React from 'react';
import ToDoAddForm from './ToDoAddForm/ToDoAddForm';
import ToDoList from './ToDoList/ToDoList';
import { TodoItem } from '../types/types';

import { connect } from 'react-redux';
import { addTodo, deleteTodo, completeTodo } from '../redux/actions';
import { State } from '../types/redux/reducerTypes';

interface Props {
  tasks: TodoItem[];
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
  addTodo: (text: string) => void;
}

const App = (props: Props) => {
  return (
    <div className='todo-app'>
      <ToDoAddForm addTodo={props.addTodo} />
      <ToDoList
        tasks={props.tasks}
        deleteTodo={props.deleteTodo}
        completeTodo={props.completeTodo}
      />
    </div>
  );
};

const mapStateToProps = (state: State) => {
  console.log(state);
  const { tasks } = state;
  return { tasks };
};

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (text: string) => dispatch(addTodo(text)),
  deleteTodo: (id: number) => dispatch(deleteTodo(id)),
  completeTodo: (id: number) => dispatch(completeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
