import React, { Component } from 'react'
import FormContact from './component/FormContact';
import ViewContact from './component/ViewContact';

export default class App extends Component {
  constructor(props) {
    super(props);
    //khoi tao doi tuong state
    this.state={
      name:'minh hieu',
      phone:'1234567890',
      arr:[
        {name:"minh hieu",phone:"01234556788", gender:1},
        {name:"bluddy",phone:"06788",gender:0},
      ]
    }
  }
  
  //ham xu ky su kien
  handleClick=()=>{
    alert('ham khong co tham so');
  }
  handleClick2 =(param)=>{
    console.log(param); 
   }
  //  changstate
  handleChange=()=>{
    this.setState({
      name:'bluddy',
    })
  }
  //ham nhan submit tu component formcontact
  handleSubmit =(obj)=>{
    console.log("formcontact=> app: ",obj);
    this.setState({
      name:obj.name,
      phone:obj.phone,
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>review event form</h1>
        <hr/>
        <button onClick={this.handleClick}>click here</button>
        <button onClick={()=>this.handleClick2("minhhieu")}>click here</button>
        {/* phat sinh su kien lam bien doi gia tri trong state */}
        <button onClick={this.handleChange}>change name: <b>{this.state.name}</b></button>
        <FormContact onSubmit={this.handleSubmit}/>
        <ViewContact renderContact={this.state} renderList={this.state.arr}/>
      </div>
    )
  }
}
