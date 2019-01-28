import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 16,
    fontWeight: "bold"
  };

  renderTags() {
    const { tags } = this.state;
    if (tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    const x = <p>Zero</p>;
    return value === 0 ? x : value;
  }

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btm-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
