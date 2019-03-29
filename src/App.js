import React, { Component } from 'react';
import Lister from './Lister';
import { Provider } from 'react-redux';
import store from './store/'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Lister />
        </div>
      </Provider>
    );
  }
}

export default App;
