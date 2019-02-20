import React, { Component } from "react";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonState: "none" };
  }

  handleMouseEnter = e => {
    this.setState(
      Object.assign({}, this.state, { buttonState: "inline-block" })
    );
  };

  render() {
    let { id, img, title } = this.props;
    return (
      <div>
        <img onMouseEnter={this.handleMouseEnter} src={img} alt="" />
        <button
          onClick={e => this.props.removeLike(id)}
          style={{ display: this.state.buttonState }}
        >
          Remove
        </button>
      </div>
    );
  }
}

class MyList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let myList;
    myList = this.props.mylist;
    return (
      <ul>
        {myList.map(e => {
          return <Item {...e} removeLike={this.props.removeLike} />;
        })}
      </ul>
    );
  }
}

export default MyList;
