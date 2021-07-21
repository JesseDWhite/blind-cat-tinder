import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/profile-reducer';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import middlewareLogger from './middleware/middleware-logger';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, applyMiddleware(thunkMiddleware, middlewareLogger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();