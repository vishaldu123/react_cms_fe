
import './App.css';

function App() {
      const MyArray=["Vishal","Ravi","Vishal","Ravi","Vishal","Ravi"];
      const item = MyArray.map((i)=><div>{i}</div>)
      function f() {
        return [1, 2, 3];
      }const [a, , b] = f();const [c] = f();
  return (
    <div className="App">
          {item} 

          {a}
          {b}
          {c}
    </div>
  );
}

export default App;
