import React, { Component } from "react";
import "../../styles.css";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonState: "none" };
  }

  handleMouseEnter = e => {
    this.setState(Object.assign({}, this.state, { buttonState: "block" }));
  };

  handleMouseLeave = e => {
    this.setState({ buttonState: "none" });
  };

  render() {
    let { id, img, title } = this.props;
    return (
      <div
        className="item-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img src={img} alt="" />
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
      <div className="movie-container">
        <ul>
          {myList.map(e => {
            return <Item {...e} removeLike={this.props.removeLike} />;
          })}
        </ul>
      </div>
    );
  }
}

export default MyList;
