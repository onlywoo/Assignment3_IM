import React, { Component } from "react";

export default class popupItem extends Component {
  render() {
    return (
      <div className="popupItem">
        <div style={{ backgroundImage: `url(${this.props.image})` }}></div>
        <h1>{this.props.name}</h1>
        <p>{this.props.price}</p>
      </div>
    );
  }
}
