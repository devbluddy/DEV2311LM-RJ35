import React from 'react'

// export default function Buttonhandle(props) {
export default function Buttonhandle({onChangeData}) {
//   ham xu ly su kien 

    const fn_button1= () =>{
        alert("fn_button1");
    }
    function fn_button2() {
        alert("fn_button2")
    }
    
    const fn_button3= (param) =>{
        alert(param);
    }
    //ban su kien len app
    const fn_ChangeData =()=>{
        // props.onChangeData("bluddy")
        onChangeData("bluddy")
    }
    return (
    <div>
        <h1> handle click</h1>
        {/* goi function normal  */}
        {/* <button className='btn btn-primary' onClick={fn_button1()}>button 1</button>
        <button className='btn btn-primary' onClick={fn_button2()}>button 2</button> */}
        <button className='btn btn-primary mx-2' onClick={fn_button3}>button 3</button>
        <button className='btn btn-primary mx-2' onClick={()=>fn_button3("minh hieu")}>button 4</button>
        <button className='btn btn-primary mx-2' onClick={fn_ChangeData}>change data app</button>
    </div>
  )
}
