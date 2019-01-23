import React, {
  Component,
  Fragment
} from 'react';

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/200'
  };

  styles = {
    fontSize: 16,
    fontWeight: 'bold'
  }

  render() {
    return (
      <Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
        <button style={{fontSize:20}} className="btn btn-secondary btn-sm"> Increment </button>
      </Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    const x = <p>Zero</p>;
    return count === 0 ? x : count
  }
}

export default Counter;
