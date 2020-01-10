import React, { Component } from "react";

export default class PrintAsYouType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleOnChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={e => this.handleOnChange(e)} />
        <div>{this.state.text}</div>
      </div>
    );
  }
}

// timer
  // componentdidmount
        
  // componentwillunmount