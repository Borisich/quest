import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../containers/login-form';
import ErrorMessage from '../containers/error-message';
import SitePage from '../containers/site-page';
import { Provider } from 'react-redux';

import store from '../store.js';

class Main extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <ErrorMessage />
        <SitePage />
      </div>
    )
  }
}

ReactDOM.render (
  <Provider store={store}>
   <Main />
  </Provider>,
   document.getElementById('main')
 );
