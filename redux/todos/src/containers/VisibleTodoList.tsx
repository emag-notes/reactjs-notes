import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { TodoType } from '../types/TodoType';

interface State {
  todos: TodoType[];
  visibilityFilter: string;
}

const getVisibleTodos = (todos: TodoType[], filter: string) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state: State) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = {
  onTodoClick: toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);