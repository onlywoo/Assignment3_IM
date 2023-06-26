import React, { Component } from "react";

export default class popupItem extends Component {
  render() {
    return (
      <div className="popupItem">
        <div style={{ backgroundImage: `url(${this.props.image})` }}></div>
      </div>
    );
  }
}
