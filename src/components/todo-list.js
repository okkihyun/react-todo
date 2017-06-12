import _ from 'lodash';
import React from 'react';
import TodoListHeader from './todo-list-header';
import TodoListItem from './todo-list-item';

class TodoList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos,
      (todo, i) => <TodoListItem key={i} {...todo} {...props}/>);
  }

  render() {
    return (
      <t>
        <TodoListHeader/>
        <tbody>
        {this.renderItems()}
        </tbody>
      </t>
    );
  }
}

export default TodoList;
