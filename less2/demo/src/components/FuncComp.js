// 1 import

import React from 'react'
import FuncCompChild from './FuncCompChild';

// 2 xay dung function component
function FuncComp(props) {
      // arrew function
      const show = (param) =>{
        return(
            <>
                <h2 className='alert alert-infor'>welcome, {param}</h2>
            </>
        )
    }
    return(
        <>
            <h1>demo function component- su dung JSX expression de hien thi du lieu tu props</h1>
            <hr></hr>
            <div className='alert alert-danger'>
                <p>Name: {props.name}</p>
                <p>Add: {props.address}</p>
            </div>
            <div>
                <h2>component con</h2>
                <FuncCompChild />
            </div>
            {show("minh hieu")}
        </>
    )
}

// 3 export

export default FuncComp;