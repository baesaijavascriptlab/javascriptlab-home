import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to jSLAT - the javaScript Lab Administration Tool</h1>
        </header>
        <p className="App-intro">
          This tool is developed and maintained by graduates of JavaScript Lab.
        </p>
        <ul>
            <li>Add BootStrap styling</li>
            <li>Add MongoDB</li>
            <li>Turning this list into an editable enhancement list</li>
            <li>Creating sign-up functionality for students</li>
            <li>Creating sign-up functionality for mentors</li>
            <li>Create a sign-in form for students and mentors</li>
            <li>Create bug reporting functionality</li>
            <li>Create enhancement proposal functionality.</li>
            <li>Creating editable bug list</li>
            <li>Create functionality that maps students with mentors</li>
        </ul>
        <p>The codebase is available on <a href="https://github.com/baesaijavascriptlab/javascriptlab-home" target="_blank">GitHub</a>. Once you have downloaded the code to a local repository, you can make changes and submit to the code owners.
To get started, edit <code>src/App.js</code> and save to reload.</p>
      </div>
    );
  }
}

export default App;
