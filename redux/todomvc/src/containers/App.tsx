import * as React from 'react';
import Header from '../components/Header';
import { connect, Dispatch } from 'react-redux';
import MainSection from '../components/MainSection';
import { Todo } from '../type/Todo';
import { addTodo, clearCompleted, completeAll, completeTodo, deleteTodo, editTodo, TodoAction } from '../actions/index';

interface Props {
  todos: Todo[];
  actions: any;
}

interface State {
  todos: Todo[];
}

const App = ({todos, actions}: Props) => (
  <div>
    <Header addTodo={actions.addTodo}/>
    <MainSection todos={todos} actions={actions} />
  </div>
);

const mapStateToProps = (state: State) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>) => ({
  actions: {
    addTodo: (text: string) => dispatch(addTodo(text)),
    deleteTodo: (id: number) => dispatch(deleteTodo(id)),
    editTodo: (id: number, text: string) => dispatch(editTodo(id, text)),
    completeTodo: (id: number) => dispatch(completeTodo(id)),
    completeAll: () => dispatch(completeAll()),
    clearCompleted: () => dispatch(clearCompleted())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
