import React, { Component } from "react";
 
class Content extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.content.title}</h2>
        <p>{this.props.content.text}</p>
      </div>
    );
  }
}
 
export default Content;