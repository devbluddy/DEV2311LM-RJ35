import React, { Component } from 'react';

class FormContact extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'minh hieu',
            phone:'1234567890',
        }
    }
    //ham xu ly su kien
    handleChange=(event)=>{
        let name= event.target.name;  //lay ra ten dieu khien dang tuong tac
        let value= event.target.value;      //lay ra gia tri cua dieu khien
        this.setState({
            [name]:value,
        })
    }
    //ham xu ly su kien khi submit form
    //chuyen du lieu len app cpmponent
    handleSubmit =(ev)=>{
        ev.preventDefault();
        // this.props.onSubmit(this.state.name,this.state.phone);
        this.props.onSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>form contact</h2>
                <form>
                    <div className='form-group'>
                        <label>Name:</label>
                        <input type='text' name='name' value={this.state.name} onChange={this.handleChange}></input>
                    </div>
                    <div className='form-group'>
                        <label>phone:</label>
                        <input type='text' name='phone' value={this.state.phone} onChange={this.handleChange}></input>
                    </div>
                    <button onClick={this.handleSubmit}>gui len app</button>
                </form>
            </div>
        );
    }
}

export default FormContact;
