import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    count: 0,
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

  render() {
    return (
      <Fragment>
        <img src={this.state.imageUrl} alt="" />
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
        {this.renderTags()}
        {this.state.tags.length === 0 && <p>Please create a new tag</p>}
      </Fragment>
    );
  }

  handleIncrement = () => {
    console.log("increment clicked", this);
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
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    const x = <p>Zero</p>;
    return count === 0 ? x : count;
  }
}

export default Counter;
