import './App.css';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';

function App() {
  return (
    <div className="container border my-5">
      <h1>review reactjs basic(phan 1)</h1>
      {/* function component */}
      <FuncComp />
      <FuncComp name="minh hieu" age="21" />
      {/* class component */}
      <ClassComp />
      <ClassComp name="minh hieu" age="21"/>
    </div>
  );
}

export default App;
