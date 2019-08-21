import React, { Component } from 'react';
import Header from './components/header/header';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <Header></Header>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
