import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import 'whatwg-fetch';
import 'babel-polyfill';
import createStore from './redux';
import App from './components/App';
import Home from './components/Home';
import './style.scss';


const store = createStore();
syncHistoryWithStore(hashHistory, store);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <div>
          <Route path="/home" exact component={Home} />
        </div>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
