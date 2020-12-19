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

class Text extends Component {
  render () {
    const textBool = this.props.boolean ? 'True' : 'False'
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textBool}</p>
      </div>
    )
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
      <Text number={2} text='The new string' boolean={true} />
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
