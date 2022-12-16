import React, { Component } from "react";

//* This counter app is works by class
//? changing to function on the next date

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  styles = {
    fontStyle: "bold",
    color: "teal",
  };
  btn = {
    color: "black",
    width: "50px",
    fontStyle: "bold",
    height: "50px",
    marginLeft: "5px",
  };
  number = {
    color: "black",
    margin: "auto",
    marginBottom: "5px",
    backgroundColor: "lightGray",
    width: "100px",
    hight: "50px",
  };
  increment = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };
  decrement = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome to Counter- the first class demo</h1>
        <h1 style={this.number}>{this.state.count}</h1>
        <button onClick={this.decrement} style={this.btn}>
          -
        </button>
        <button onClick={this.increment} style={this.btn}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
