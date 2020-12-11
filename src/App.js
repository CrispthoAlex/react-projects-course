import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi everyone,<br></br>
          Welcome to React Course.<br></br>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/crispthoalex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
