import React from 'react';


class TodoListHeader extends React.Component {
  render() {
    return (
      <thead>
      <tr>
        <th>task</th>
        <th>action</th>
      </tr>
      </thead>
    );
  }
}

export default TodoListHeader;
