import logo from './logo.svg';
import './App.css';
import MyComponent from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* <MyComponent/> */}
      {/* <Welcome/> */}
      <Hello/>
    </div>
  );
}

export default App;
