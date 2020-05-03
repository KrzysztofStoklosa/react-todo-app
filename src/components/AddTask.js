import React, { Component } from "react";
import "./AddTask.css";
const minDate = new Date().toISOString().slice(0, 10);
class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: minDate,
  };
  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    if (type === "text" || type === "date") {
      const value = e.target.value;
      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    }
  };
  handleClick = () => {
    const { text, checked, date } = this.state;
    const add = this.props.add(text, checked, date);
    if (add) {
      this.setState({
        text: "",
        checked: false,
        date: minDate,
      });
    }
  };
  render() {
    let maxDate = minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + minDate.slice(4, 10);
    return (
      <div className="form">
        <input
          type="text"
          name="text"
          placeholder="Add task"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input
          type="checkbox"
          id="important"
          name="checked"
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        <label htmlFor="important">Priority</label>
        <label htmlFor="date">select date</label>
        <input
          type="date"
          name="date"
          value={this.state.date}
          min={minDate}
          max={maxDate}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Save</button>
      </div>
    );
  }
}

export default AddTask;
