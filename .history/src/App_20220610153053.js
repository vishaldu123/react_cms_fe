import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import './App.css';

function App() {
      const MyArray=["Vishal","Ravi","Vishal","Ravi","Vishal","Ravi"];
      const item = MyArray.map((i)=><div>{i}</div>)
      function f() {
        return [3, 2, 5,4];
      }
      const [a, b, ,] = f();
      const [d] = f();
  return (
    <div className="App">
          {item} 

          {a}
          {b}
          
          {d}
    </div>
  );
}

export default App;
