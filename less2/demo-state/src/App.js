import React, { Component } from 'react'
import Member from './components/Member';

export default class App extends Component {
  constructor(props) {
    super(props);
    // tao state luu tru du lieu cua app
    this.state = {
      name: "minh hieu",
      age: 21,
      address: "123 @#$"
    }
  }
  // ham xu ly su kien khi thay doi
  changeInfor = () => {
    // cap nhat du lieu trong state
    this.setState(
      {
        name: "bluddy",
        age: 22,
        address: "ha noi"
      }
    )
  }
  render() {
    return (
      <div className="container border mt-5">
        <h1>demo state</h1>
        <hr />
        <h2>hien thi du lieu tu state</h2>
        <div className='alert alert-danger'>
          <p>Name: {this.state.name}</p>
          <p>Age: {this.state.age}</p>
          <p>Address: {this.state.address}</p>
        </div>
        <button onClick={this.changeInfor}>change infor</button>
        <hr/>
        <Member/>
      </div>
    )
  }
}
