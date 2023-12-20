import React, { Component } from 'react'

export default class FormInput extends Component {
    constructor (props){
        super(props);
        this.state={
            studentName:'minh hieu'
        }
    }
    // ham xu ly su kien
    handleChange = (ev)=>{
        this.setState({
            studentName:ev.target.value,
        })
    }
    //submit
    handleSubmit =(event)=>{
        event.preventDefault();
        console.log('======================');
        console.log(this.state.studentName);
        console.log('======================');
    }
    render() {
    return (
      <div className='alert alert-success'>
        <form>
            <h2> xu ly du lieu voi input: </h2>
            <label>Name:</label>
            <input value={this.state.studentName}
                    onChange={this.handleChange}></input>
            <button onClick={this.handleSubmit}>submid</button>
        </form>
      </div>
    )
  }
}
