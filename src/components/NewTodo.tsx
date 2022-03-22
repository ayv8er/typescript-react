import React, { useRef } from "react";

type NewTodoProps = {
  todoAddHandler: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const { todoAddHandler } = props;
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    todoAddHandler(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
