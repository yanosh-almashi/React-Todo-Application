import React from 'react';
import '../../app.css';

interface Props {
  text: string;
  id: number;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
  completed: boolean;
}

const TodoListItem = ({
  text,
  id,
  deleteTodo,
  completeTodo,
  completed
}: Props) => {
  const onDoneClick = (): void => {
    completeTodo(id);
  };

  let classNames = 'text';

  if (completed) {
    classNames += ' completed';
  }

  console.log(text);
  return (
    <span>
      <span className={classNames}>{text}</span>

      <button type='button' onClick={() => deleteTodo(id)}>
        Delete
      </button>

      <button type='button' onClick={onDoneClick}>
        Done
      </button>
    </span>
  );
};

export default TodoListItem;
