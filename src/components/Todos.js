import React, { Component } from 'react';

export default class Todos extends Component {
  state = {
    tasks: [4, 55]
  };

  changeTasks = () => {
    // change array to become [4, 'Doha']
    this.setState({
      tasks: [4, 'Doha'] // bad practice, how to change array element
    })
  }
  render() {
    console.log(this.props);
    return (
      <div style={{ backgroundColor: 'green' }}>
        <button onClick={this.props.dyaa}>Change state in parent (App Compnent</button>

        <h1>Todos Compnent</h1>
        <p>{this.state.tasks[1]}</p>
        <button onClick={this.changeTasks}>Change state todos component</button>
      </div>
    );
  }
}
