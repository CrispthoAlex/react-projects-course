import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Hello (props) {
  return <h2>{props.title}</h2>;
}
const ArrowHello = (props) => <h3>{props.title}</h3>;

// We will imports React and Component
class NewHello extends Component {
  render () {
    return <h4>{this.props.title}</h4> 
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Hello component is working'/>
        <ArrowHello title='ArrowHello component is working'/>
        <NewHello title='NewHello component is working too'/>
      </header>
      <p>
        Hi everyone<br></br>
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
      
    </div>
  );
}

export default App;
