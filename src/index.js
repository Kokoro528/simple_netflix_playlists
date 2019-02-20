import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/stores";

// class App extends Component {
//   constructor(props) {
//     console.log(props);
//     super(props);
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <MyList {...this.props} />
//         <Recommendation {...this.props} />
//         <div>
//           <ul>
//             {this.props.mylist.map(e => {
//               return <li id={e.id}>e.title</li>;
//             })}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// const App1 = connect(
//   state => {
//     console.log(state, "state");
//     return {
//       recommendations: state.recommendations,
//       mylist: state.mylist
//     };
//   },
//   dispatch => {
//     return {
//       removeLike: id => {
//         dispatch(actions.removeLike(id));
//       },
//       addLike: id => {
//         dispatch(actions.addLike(id));
//       }
//     };
//   }
// )(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
