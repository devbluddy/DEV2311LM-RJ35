import React, { Component } from 'react'

export default class FormSelect extends Component {
    constructor (props){
        super(props);
        this.state={
           thanhpho:''
        }
    }

    handleChange = (ev)=>{
        this.setState({
            thanhpho:ev.target.value,
        })
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        console.log('======================');
        console.log(this.state.thanhpho);
        console.log('======================');
    }

    render() {
        return (
          <div className='alert alert-success'>
            <form onSubmit={this.handleSubmit}>
                <h2> xu ly du lieu voi select: </h2>
                <label>Name:</label>
               <select value={this.state.thanhpho} onChange={this.handleChange}>
                    <option value={"HN1"}>hn1</option>
                    <option value={"HN2"}>hn2</option>
                    <option value={"HN3"}>hn3</option>
                </select>
                <button >submid</button>
            </form>
          </div>
        )
      }
}
