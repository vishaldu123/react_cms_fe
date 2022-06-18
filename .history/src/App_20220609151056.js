import logo from './logo.svg';
import './App.css';

function App() {
      const MyArray=["Vishal","Ravi","Vishal","Ravi","Vishal","Ravi"];
      const item = MyArray.map((i)=><div>{i}</div>)
  return (
    <div className="App">
          {item} 
    </div>
  );
}

export default App;
