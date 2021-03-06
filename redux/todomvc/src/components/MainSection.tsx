import * as React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../type/Todo';
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../constants';
import Footer from './Footer';

interface Props {
  todos: Todo[];
  actions: any;
}

interface State {
  filter: string;
}

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: (todo: Todo) => !todo.completed,
  [SHOW_COMPLETED]: (todo: Todo) => todo.completed
};

export default class MainSection extends React.Component<Props, State> {
  state = {
    filter: SHOW_ALL
  };

  handleClearCompleted = () => {
    this.props.actions.clearCompleted();
  }

  handleShow = (filter: string) => {
    this.setState({filter});
  }

  renderFooter(completedCount: number) {
    const {todos} = this.props;
    const {filter} = this.state;
    const activeCount = todos.length - completedCount;

    if (todos.length) {
      return (
        <Footer
          completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={this.handleClearCompleted}
          onShow={this.handleShow}
        />
      );
    } else {
      return;
    }
  }

  renderToggleAll(completedCount: number) {
    const {todos, actions} = this.props;
    if (todos.length > 0) {
      return (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todos.length}
          />
          <label onClick={actions.completeAll}/>
        </span>
      );
    } else {
      return;
    }
  }

  render() {
    const {todos, actions} = this.props;
    const {filter} = this.state;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const completedCount =
      todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0);

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions}/>
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}