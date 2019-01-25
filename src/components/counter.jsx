import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    imageUrl: "https://picsum.photos/200",
    // tags: ["tag1", "tag2", "tag3"]
    tags: []
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  styles = {
    fontSize: 16,
    fontWeight: "bold"
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
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
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
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
          onClick={this.handleIncrement}
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
