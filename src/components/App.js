import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
class App extends Component {
  counter = 4;
  state = {
    tasks: [
      {
        id: 0,
        text: "play computer games",
        date: "2020-04-24",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "homework",
        date: "2020-04-20",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "play",
        date: "2020-07-20",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };
  handleActiveChange = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.map((task) => {
      if (id === task.id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
      return task;
    });
    this.setState({
      tasks,
    });
  };

  handleDelateTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => id !== task.id);
    this.setState({
      tasks,
    });
  };
  handleAddTask = (text, checked, date) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: checked,
      active: true,
      finishDate: null,
    };
    this.setState((prevstate) => ({
      tasks: [...prevstate.tasks, task],
    }));
    this.counter++;
    return true;
  };
  render() {
    return (
      <div className="app">
        <h1>TODO APP</h1>
        <AddTask add={this.handleAddTask} />
        <TaskList
          tasks={this.state.tasks}
          change={this.handleActiveChange}
          delete={this.handleDelateTask}
        />
      </div>
    );
  }
}

export default App;
