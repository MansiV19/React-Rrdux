import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Add,Sub} from './action/counter'


class App extends Component {
constructor(props) {
  super(props);
}
  render() {
  return (
    <div className="App">
  <p>{JSON.stringify(this.props)}</p>
     <button onClick={() => {Add()}}>Add</button>
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.Counter
  }
}
export default connect(mapStateToProps,{Add})(App);
