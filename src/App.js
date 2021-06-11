import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './Components/ChatWindow.js';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  constructor() {
    super();
    
    this.state = { 
      messages: [
        { username: 'Amy', text: 'Hi, Jon!' },
        { username: 'Amy', text: 'How are you?' },
        { username: 'John', text: 'Hi, Amy! Good, you?' },
      ],
      users: [
        { username: 'Amy' },
        { username: 'John' }
      ]
    };
  }
  addMessage = ( username, message ) => {
    this.setState( { messages: [...this.state.messages, { username, text: message } ] } );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <ChatWindow
			title="Super Awesome Chat"
			addMessage={ this.addMessage }
			messages={ this.state.messages }
			user={ this.state.users[0] } />

          <ChatWindow
			title="Super Awesome Chat"
			addMessage={ this.addMessage }
			messages={ this.state.messages }
			user={ this.state.users[1] } />
        </div>
      </div>
    );
  }
}

export default App;
