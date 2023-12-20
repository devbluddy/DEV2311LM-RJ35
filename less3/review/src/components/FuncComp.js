import React from 'react'

export default function FuncComp(props) {
  return (
    <div>
        <h2>DEMO function component</h2>
        <hr/>
        <div>
            <h3> lay du lieu tu props</h3>
            <p> Name: {props.name}</p>
            <p> Age: {props.age}</p>
        </div>
    </div>
  )
}
