import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { addTodo, TodoAction } from '../actions';

interface Props {
  dispatch: Dispatch<TodoAction>;
}

const AddTodo = ({dispatch}: Props) => {
  let input: HTMLInputElement;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          ref={(node: HTMLInputElement) => {
            input = node;
          }}
        />
        <button type="submit">
          Add todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);