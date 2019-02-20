import React, { Component } from "react";
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
      <div className="movie-container">
        <ul>
          {recommendations.map(e => {
            return <Item {...e} addLike={this.props.addLike} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Recommendations;
