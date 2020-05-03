import React from "react";
import Task from "./Task";
const TaskList = (props) => {
  let tasksActive = props.tasks.filter((task) => task.active);
  let tasksInactive = props.tasks.filter((task) => !task.active);
  if (tasksActive.length > 1) {
    tasksActive.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
  }
  if (tasksInactive.length > 1) {
    tasksInactive.sort((a, b) => b.finishDate - a.finishDate);
  }
  tasksActive = tasksActive.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  tasksInactive = tasksInactive.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <div>
      <h2>Task list</h2>
      <h3>Tasks to do</h3>
      {tasksActive.length > 0 ? tasksActive : "You have nothing to do!"}
      {tasksInactive.length > 5 && "Only the last 5 tasks are displayed"}
      <h4>Tasks done ({tasksInactive.length})</h4>
      {tasksInactive.slice(0, 5)}
    </div>
  );
};

export default TaskList;
