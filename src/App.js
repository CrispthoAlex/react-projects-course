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
    const textBool = this.props.isActivated ? 'True' : 'False'
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2)
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textBool}</p>
        <p>{this.props.arrayOfNumbers.join(', ')}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{this.props.objectWithInfo.key2}</p>
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
      <Text 
        arrayOfNumbers={[2, 3, 10]}
        isActivated
        objectWithInfo={{key: 'First Value', key2: 'Second Value'}}
        number={2}
        text='The new string'
      />
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
