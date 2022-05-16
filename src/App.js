import './App.css';
import Navbar from './Navbar.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meditation React App</h1>
        <Navbar />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
