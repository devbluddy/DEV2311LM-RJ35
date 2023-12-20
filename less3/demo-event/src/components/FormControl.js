import React, { Component } from 'react'

export default class FormControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: '',
            thanhpho: ''
        }
    }
    handleChange = (ev)=>{
        let name=ev.target.name;
        let value=ev.target.value;
        this.setState({
           [name]:value
        })
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        console.log('======================');
        console.log(this.state);
        console.log('======================');

        this.props.onSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-primary'>
                <form>
                    <h2> xu ly du lieu voi input: </h2>
                    <label>Name:</label>
                    <input 
                        name='studentName'
                        value={this.state.studentName}
                        onChange={this.handleChange}></input>
                    <hr/>
                    <label>thanh pho:</label>
                    <select  name='thanhpho' value={this.state.thanhpho} onChange={this.handleChange}>
                    <option value={"HN1"}>hn1</option>
                    <option value={"HN2"}>hn2</option>
                    <option value={"HN3"}>hn3</option>
                </select>
                <hr/>
                <button onClick={this.handleSubmit}>submid</button>
                </form>
            </div>
        )
    }
}
