
import './App.css';

function App() {
      const MyArray=["Vishal","Ravi","Vishal","Ravi","Vishal","Ravi"];
      const item = MyArray.map((i)=><div>{i}</div>)
      function f() {
        return [1, 2, 5,4];
      }
      const [a, b, ,c] = f();
      const [d] = f();
  return (
    <div className="App">
          {item} 

          {a}
          {b}
          {c}
          {d}
    </div>
  );
}

export default App;
