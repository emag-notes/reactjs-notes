import * as React from 'react';
import * as classNames from 'classnames';

interface Props {
  onSave: (text: string) => void;
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}

interface State {
  text: string;
}

export default class TodoTextInput extends React.Component<Props, State> {
  state = {
    text: this.props.text || ''
  };

  render() {
    return (
      <input
        className={
          classNames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo
          })
        }
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={e => {
          if (!this.props.newTodo) {
            this.props.onSave(e.currentTarget.value);
          }
        }}
        onChange={e => {
          this.setState({text: e.currentTarget.value});
        }}
        onKeyDown={e => {
          const text = e.currentTarget.value.trim();
          if (e.which === 13) {
            this.props.onSave(text);
            if (this.props.newTodo) {
              this.setState({text: ''});
            }
          }
        }}
      />
    );
  }
}