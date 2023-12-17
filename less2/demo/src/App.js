import './App.css';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';

function App() {
  //bien
  const name = "minhhieu";
  //ham
  const show = (name) => {
    return <h2>welcome to {name}</h2>
  }
  // doi tuong
  const obj = {
    name: "sai minh hieu",
    age: 21,
    address: "hanoi"
  }
  //element
  const element = (
    <div className='alert alert-success'>
      <p>Name: {obj.name}</p>
      <p>Age: {obj.age}</p>
      <p>Address: {obj.address}</p>
    </div>
  )
  //ham
  const formatName = (props) => {
    return (
      <div className='alert alert-danger'>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Address: {props.address}</p>
      </div>
    )
  }
  return (
    <div className="container border mt-5">
      <h1>DEMO JSX EXPRSSION - COMPONENT</h1>
      <hr></hr>
      <div>
        <h2>JSX EXPRSSION</h2>
        <p>{"minh hieu"}</p>
        <p>su dung bien name: <b>{name}</b></p>
        <hr />
        <h2>su dung ham: </h2>
        {show("minh hieu")}
        <hr />
        <h2>su dung doi tuong: </h2>
        <div className='alert alert-success'>
          <p>Name: {obj.name}</p>
          <p>Age: {obj.age}</p>
          <p>Address: {obj.address}</p>
        </div>
        <hr />
        {element}
        {formatName(obj)}
      </div>

      <div>
        <h2>Function conponent demo</h2>
        {/* props null  */}
        <FuncComp /> 
        {/* co props  */}
        <FuncComp name="minh hieu" address="hanoi" company="hunre"/>
      </div>
      <div>
        <ClassComp />
        <hr/>
        <ClassComp name="minh hieu" company="hunre"/>
      </div>
    </div>
  );
}

export default App;
