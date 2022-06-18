
import './App.css';

function App() {
      const MyArray=["Vishal","Ravi","Vishal","Ravi","Vishal","Ravi"];
      const item = MyArray.map((i)=><div>{i}</div>)
      function f() {
        return [1, 2, 3];
      }
  return (
    <div className="App">
          {item} 

      const [a, , b] = f();
      console.log(a); // 1
      console.log(b); // 3

      const [c] = f();
      console.log(c); // 1
    </div>
  );
}

export default App;
