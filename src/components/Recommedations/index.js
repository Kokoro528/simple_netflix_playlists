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
          onClick={e => this.props.addLike(id)}
          style={{ display: this.state.buttonState }}
        >
          Add
        </button>
      </div>
    );
  }
}
class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonState: "none" };
  }

  render() {
    let recommendations;
    recommendations = this.props.recommendations;
    return (
      <ul>
        {recommendations.map(e => {
          return <Item {...e} addLike={this.props.addLike} />;
        })}
      </ul>
    );
  }
}

export default Recommendations;
