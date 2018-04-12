import React, {Component} from 'react'
export default class HelloMessage extends Component {
  render() {
    return (
            <div>Hello {this.props.data.Nama}</div>
    );
  }
}

