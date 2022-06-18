import logo from './logo.svg';
import './App.css';

function App() {
      const MyArray=["Vishal","Ravi","Vishal","Ravi","Vishal","Ravi"];
     
  return (
    <div className="App">
      MyArray.map((i) => {<h1>Hello {i}!</h1> })     
    </div>
  );
}

export default App;
