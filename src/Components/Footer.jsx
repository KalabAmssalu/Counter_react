import React, { Component } from "react";

export class Footer extends Component {
  container = {
    position: "relative",
  };
  styleFooter = {
    position: "fixed",
    bottom: "0px",
    right: "0px",
    backgroundColor: "lightGray",
    width: "100%",
    color: "Gray",
  };
  render() {
    return (
      <div style={this.container}>
        <br />
        <br />
        <h3 style={this.styleFooter}>@Kalab Amssalu [00580/12]</h3>
      </div>
    );
  }
}

export default Footer;
