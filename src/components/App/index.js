import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as actions from "../../redux/actions";
import { connect } from "react-redux";
import MyList from "../MyList";
import Recommendation from "../Recommedations";

class App extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <MyList {...this.props} />
        <h1> Recommedations </h1>
        <Recommendation {...this.props} />
        <div>
          <ul>
            {this.props.mylist.map(e => {
              return <li id={e.id}>{e.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    console.log(state, "state");
    return {
      recommendations: state.recommendations,
      mylist: state.mylist
    };
  },
  dispatch => {
    return {
      removeLike: id => {
        dispatch(actions.removeLike(id));
      },
      addLike: id => {
        dispatch(actions.addLike(id));
      }
    };
  }
)(App);
