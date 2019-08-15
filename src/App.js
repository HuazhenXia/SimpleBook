import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter> 
      </Provider>
    );
  }
}

export default App;
