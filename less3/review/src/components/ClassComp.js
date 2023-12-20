import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(props){
        super(props);
        this.state={
            arr:[12,22,33,44],
            name: "minh hieu",
            age: 21,
        }
    }
  render() {
    return (
      <div>
        <h2>demo class component</h2>
        <div>
            <h3> truy cap du lieu tu props</h3>
            <p>Name: {this.props.name}</p>
            <p>Name: {this.props.name}</p>
        </div>
        <div>
            <h3>truy cap du lieu trong state</h3>
            <p> arr: {this.state.arr}</p>
            <p> Name: {this.state.name}</p>
            <p> age: {this.state.age}</p>
        </div>
      </div>
    )
  }
}
