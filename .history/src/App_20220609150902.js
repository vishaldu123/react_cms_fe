import logo from './logo.svg';
import './App.css';

function App() {
      const MyArray=["Vishal","Ravi","Vishal","Ravi","Vishal","Ravi"];
      const item = MyArray.map((i) => <h1>Hello {i}!</h1>)
     
  return (
    <div className="App">
          {item} 
    </div>
  );
}

export default App;
