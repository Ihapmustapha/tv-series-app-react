import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch'; 
import Main from '../Main/Main'; 

class App extends Component {  
  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <h1 className="App-Title"> TV SERIES LIST </h1> 
        </header> 
        
        <Main />
      </div>

       
    );
  }
}

export default App;
