import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import TodoList from './todo-list';
import CreateTodo from './create-todo';
import _ from 'lodash';

const todos = [
  {
    task: '빨간색 글씨는 아직 완료하지 않은 것입니다.',
    isCompleted: false
  },
  {
    task: '초록색 글씨는 이미 완료한 것입니다.',
    isCompleted: true
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Todo List with React!</h2>
        </div>
        <p className="App-intro">
          <CreateTodo todos={this.state.todos} createTask={this.creatTask.bind(this)}/>
          <TodoList todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
          />
        </p>
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({
      todos: this.state.todos
    });
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({
      todos: this.state.todos
    });
  }

  creatTask(task) {
    this.state.todos.unshift({
      task,
      isCompleted: false
    });
    this.setState({
      todos: this.state.todos
    });
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({
      todos: this.state.todos
    });
  }
}

export default App;
