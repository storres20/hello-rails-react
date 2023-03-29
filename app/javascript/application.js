// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';

import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import store from './react/redux/configureStore';

import App from './react/components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
