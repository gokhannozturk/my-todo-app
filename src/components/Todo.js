import React from 'react';

const Todo = ({
  title,
  completed,
  deleteTodo,
  id,
  editTodo,
  toggleCompleted,
}) => {
  const completedClass = completed ? 'todo-p-check' : '';
  const completedTodos = !completed && title;
  return (
    <div className="card card-main">
      <input
        type="checkBox"
        checked={completed}
        onChange={() => {
          toggleCompleted(id);
        }}
        className={`todo-checkbox`}
      />
      <p
        onClick={() => editTodo(title, id)}
        className={`todo-p ${completedClass}`}
      >
        {completedTodos}
      </p>
    </div>
  );
};
export default Todo;
