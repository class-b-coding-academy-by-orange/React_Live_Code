import React, { Component } from 'react';
import Todos from './components/Todos';

export default class App extends Component {
  state = {
    data: 'info' // todos changed you
  };
  // problems:
  // how to change from child: send a function from parent to child as props, the function changes the data 
  // to what you want to change
  changeFromChild = (1) => {
    console.log('change from child have been called');
    this.setState({ data: 'Changed from child' })
  }
  changeData = () => {
    this.setState({ data: 'Orayb' });
  }
  render() {
    // let equal = 'Hala';
    return (
      <>
        <Todos dyaa={this.changeFromChild} />
        <h1 style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}>{this.state.data}</h1>
        <button onClick={this.changeData}>Change Data</button>

        {/* 
        <h1>{equal}</h1>
        
        {<button onClick={function () {
          console.log(equal);
           equal = "Haya"
          console.log(equal);

            }}>Change Data</button>} */}
      </ >
    );
  }
}
