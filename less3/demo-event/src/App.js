import React, { Component } from 'react'
import Buttonhandle from './components/Buttonhandle'
import FormInput from './components/FormInput'
import FormSelect from './components/FormSelect'
import FormControl from './components/FormControl'
import ListRender from './components/ListRender'
import ListStudent from './components/ListStudent'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      company: "hunre",
      students:[
        {name: "hieu1",age:"20"},
        {name: "hieu2",age:"21"},
        {name: "hieu3",age:"22"},
        {name: "hieu4",age:"23"},
        {name: "hieu4",age:"23"},
        {name: "hieu4",age:"23"},
        {name: "hieu4",age:"23"},
        {name: "hieu4",age:"23"},
        {name: "hieu4",age:"23"},
      ],

    }
  }
  // nhan du lieu tu conponent buttonhandle
  handeChangeData=(data) =>{
    this.setState({
      company:data
    })
  }

  handelSubmitForm =(data)=>{
    console.log('======================');
        console.log("app: ",data);
        console.log('======================');
  }
  render() {
    return (
      <div className="container border my-5">
        <h1>demo event-form- {this.state.company}</h1>
        {/* xu ly voi su kien tren cac nut */}
        <Buttonhandle onChangeData={this.handeChangeData}/>

        <div >
          <FormInput/>
          <FormSelect/>
          <FormControl onSubmit={this.handelSubmitForm}/>
          <div>
            <ListRender/>

            <ListStudent renderStudents={this.state.students}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
