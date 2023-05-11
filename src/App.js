import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.js';
import CardComponent from './Component/CardComponent/CardComponent';
function App() {
  return (
    <div className="App">
      <Home/>
      <CardComponent></CardComponent>
    </div>
  );
}

export default App;
