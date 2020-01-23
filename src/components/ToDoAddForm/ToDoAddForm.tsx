import React, { useState } from 'react';

interface Props {
  addTodo: (text: string) => void;
}

const defaultText = '';

const ToDoAddForm = (props: Props) => {
  const [text, setText] = useState(defaultText);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.addTodo(text);
    setText(defaultText);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='add task to do'
        onChange={onInputChange}
        value={text}
      />
      <button>Add</button>
    </form>
  );
};

export default ToDoAddForm;
