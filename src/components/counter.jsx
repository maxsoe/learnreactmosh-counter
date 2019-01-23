import React, {
  Component,
  Fragment
} from 'react';

class Counter extends Component {
  state = {
    count: 1
  };

  render() {
    return (
      <Fragment>
        <span>{this.formatCount()}</span>
        <button> Increment </button>
      </Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    const x = <h1>Zero</h1>;
    return count === 0 ? x : count
  }
}

export default Counter;
