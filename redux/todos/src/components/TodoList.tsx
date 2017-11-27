import * as React from 'react';
import Todo from './Todo';
import { TodoType } from '../types/TodoType';

interface Props {
  todos: TodoType[];
  onTodoClick: (id: number) => void;
}

const TodoList = ({ todos, onTodoClick}: Props) => {
  return (
    <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
    </ul>
  );
};

export default TodoList;