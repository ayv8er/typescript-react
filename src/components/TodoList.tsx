import React from "react";

interface TodoListProps {
  todos: { id: string; text: string }[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { todos } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
