import React from 'react';
import '../../app.css';
import TodoListItem from '../ToDoListItem/ToDoListItem';
import { TodoItem } from '../../types/types';

interface Props {
  tasks: Array<TodoItem>;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

const TodoList = ({ tasks, deleteTodo, completeTodo }: Props) => {
  const elements = tasks.map(task => {
    return (
      <li key={task.id}>
        <TodoListItem
          text={task.text}
          completed={task.completed}
          id={task.id}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default TodoList;
