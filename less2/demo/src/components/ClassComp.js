// class component
// 1 import reactjs
import { React, Component } from 'react'
import FuncCompChild from './FuncCompChild';

//2 xay dung class comp
class ClassComp extends Component {
    constructor(props) {
        super(props);
    }
    // arrew function
    show = (param) =>{
        return(
            <>
                <h2 className='alert alert-infor'>welcome, {param}</h2>
            </>
        )
    }
    render() {
        let { name, company } = this.props;
        return (
            <>
                <h1>Class Component Demo- hien thi du lieu tu props</h1>
                <h2>welcome to, {this.props.name}</h2>
                <h2>company, {this.props.company}</h2>
                <div className='alert alert-success'>
                    <h3>Name: {name}</h3>
                    <h3>company: {company}</h3>
                </div>

                <div>
                    <h2>component con</h2>
                    <FuncCompChild />
                </div>
                <div>
                    {this.show("minh hieu")}
                </div>
            </>
        )
    }
}
//3 export de su dung o file khac

export default ClassComp;