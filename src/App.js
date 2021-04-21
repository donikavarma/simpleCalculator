import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import Keypad from './components/Keypad'
import Output from './components/Output';

class App extends React.Component {
  state = {
    result: ''
  }
  buttonPressed = buttonName =>  {

    if(buttonName === "=")
    {
      this.calculate()
    }
    else if(buttonName === "clr")
    {
      this.clear()
    }
    else if(buttonName === "ac")
    {
      this.AllClear()
    }
     else this.setState({
      result: this.state.result + buttonName
    });
  };  
  clear = () =>  {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  }
  AllClear = () =>  {
    this.setState({
      result: " "
    });
  }
  calculate = () =>  {
    try{this.setState({
      result: (eval(this.state.result) || " ") + " "
    });
  } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };
  render() 
  {
    return (
      <div className="App">
        <div className="calc-body">
          <Output results={this.state.result}/>
          <Keypad buttonPressed={this.buttonPressed}/>      
        </div>
      </div>
    );
  }
}

export default App;
