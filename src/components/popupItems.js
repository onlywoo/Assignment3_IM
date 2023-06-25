import React, { Component } from "react";

export default class popupItems extends Component {
  render() {
    return (
      <div className="popupItems">
        <div style={{ backgroundImage: `url(${this.props.image})` }}></div>
        <h1>{this.props.name}</h1>
        <p>{this.props.price}</p>
      </div>
    );
  }
}
