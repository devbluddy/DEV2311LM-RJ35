import React, { Component } from 'react'

export default class Member extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "minh hieu",
            age: 20
        }
    }
    //ham xu ly su kien
    ChangeName =()=>{
        this.setState(
            {
                name: "bluddy",
                age:5
            }
        )
    }
  render() {
    let {name,age}= this.state;
    return (
      <div className='alert alert-success'>
        <h2>Member</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <button onClick={this.ChangeName}>Change Name</button>
      </div>
    )
  }
}
