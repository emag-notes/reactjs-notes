import * as React from 'react';
import { Todo } from '../type/Todo';
import TodoTextInput from './TodoTextInput';
import * as classNames from 'classnames';

interface Props {
  todo: Todo;
  editTodo: (id: number, text: string) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

export default class TodoItem extends React.Component<Props, {}> {
  state = {
    editing: false
  };

  handleSave = (id: number, text: string) => {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({editing: false});
  }

  handleDoubleClick = () => {
    this.setState({editing: true});
  }

  render() {
    const {todo, completeTodo, deleteTodo} = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={(text: string) => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button
            className="destroy"
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      );
    }

    return (
      <li
        className={classNames({
          completed: todo.completed,
          editing: this.state.editing
        })}
      >
        {element}
      </li>
    );
  }
}