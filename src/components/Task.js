import React from "react";
import "./Task.css";
const Task = (props) => {
  const { text, date, id, important, active, finishDate } = props.task;
  if (active) {
    return (
      <div>
        <p>
          <span className={important ? "important" : ""}> {text}</span> finish
          up to - <span>{date}</span>
          <button onClick={() => props.change(id)}>Done</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const doneDate = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <span> {text}</span>( finish up to - <span>{date})</span> Done
          {doneDate}
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
