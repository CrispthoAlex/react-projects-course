import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Hello (props) {
  return <h2>{props.title}</h2> ;
}
const ArrowHello = (props) => <h3>{props.title}</h3>;

// We will imports React and Component
class NewHello extends Component {
  render () {
    return <h4>{this.props.title}</h4> ;
  }
}

class Text extends Component {
  render () {
    // Structuring the object to acces to all props. Simplefy the code
    const {
      arrayOfNumbers,
      isActivated,
      multiply,
      number,
      objectWithInfo,
      text,
      title
    } = this.props
    const textBool = isActivated ? 'True' : 'False'
    const mappedNumbers = arrayOfNumbers.map(multiply)
    return (
      <div>
        <p>{text}</p>
        <p>{number}</p>
        <p>{textBool}</p>
        <p>{arrayOfNumbers.join(', ')}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithInfo.key2}</p>
        {title}
      </div>
    );
  }
}
class Title extends Component {
  render () {
    return (
      <h1>{this.props.text}</h1>
    );
  }
}
Title.defaultProps = {
  text: 'Test the Default props'
}
// Applying state to content react
class Count extends Component {
  // Init the state as a Field
  // state = { countState: 1 }
  constructor () {
    super()
    this.state = { countState: 0 }
    // Update state with setState()
    // This event is asynchronous
    setInterval(() => {
      this.setState( { countState: this.state.countState + 1 } )
    }, 1000);
  }
  
  render () {
    return <span><b>Using state:</b> {this.state.countState}<br></br></span>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title
          text="It's not a Defualt text"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Hello component is working. As a function'/>
        <ArrowHello title='ArrowHello component is working. Using arrow function'/>
        <NewHello title='NewHello component is working too. Using as class with extends'/>
      </header>
      <Text 
        arrayOfNumbers={[2, 3, 10]}
        isActivated
        multiply={(number) => number * 3}
        number={2}
        objectWithInfo={{key: 'First Value', key2: 'Second Value'}}
        text='The new string' 
        title={<h1>Using props elements to build our site</h1>}
      />
      <Count
      
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
