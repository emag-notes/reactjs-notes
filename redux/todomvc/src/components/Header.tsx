import * as React from 'react';
import TodoTextInput from './TodoTextInput';
import { AddTodoAction } from '../actions';

interface Props {
  addTodo: (text: string) => AddTodoAction;
}

export default class Header extends React.Component<Props, {}> {

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          newTodo={true}
          onSave={(text: string) => {
            if (text.length !== 0) {
              this.props.addTodo(text);
            }
          }}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}