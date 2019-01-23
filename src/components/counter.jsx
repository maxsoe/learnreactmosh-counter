import React, {
  Component,
  Fragment
} from 'react';

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3']
  };

  styles = {
    fontSize: 16,
    fontWeight: 'bold'
  }

  render() {
    return (
      <Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span
          style={this.styles}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button style={{fontSize:20}} className="btn btn-secondary btn-sm"> Increment </button>
        <ul>
          {this.getListItems()}
        </ul>
      </Fragment>
    );
  }

  getListItems() {
    const {tags} = this.state;
    const returnTags = tags.map(tag => <li key={tag}>{tag}</li>);
    return returnTags;
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    const x = <p>Zero</p>;
    return count === 0 ? x : count
  }
}

export default Counter;
