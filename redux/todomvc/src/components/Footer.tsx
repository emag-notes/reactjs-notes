import * as React from 'react';
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../constants';
import * as classNames from 'classnames';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

interface Props {
  completedCount: number;
  activeCount: number;
  filter: string;
  onClearCompleted: () => void;
  onShow: (filter: string) => void;
}

export default class Footer extends React.Component<Props, {}> {

  renderTodoCount() {
    const {activeCount} = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span className="todo-count">
        <strong>{activeCount || 'No'} {itemWord} left</strong>
      </span>
    );
  }

  renderFilterLink(filter: string) {
    const title = FILTER_TITLES[filter];
    const {filter: selectedFilter, onShow} = this.props;

    return (
      <a
        className={classNames({selected: filter === selectedFilter})}
        style={{cursor: 'pointer'}}
        onClick={() => onShow(filter)}
      >
        {title}
      </a>
    );
  }

  renderClearButton() {
    const {completedCount, onClearCompleted} = this.props;
    if (completedCount > 0) {
      return (
        <button
          className="clear-completed"
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      );
    } else {
      return;
    }
  }

  render() {
    return (
      <footer className="footer">
        {this.renderTodoCount()}
        <ul className="filters">
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }

}