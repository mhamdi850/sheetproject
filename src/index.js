import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { applyMiddleware, createStore } from "redux";
import "./App.css";


//outils de dev
import {composeWithDevTools} from 'redux-devtools-extension';
// import logger from 'redux-logger';


const store = createStore(
  //retirer composeWithDevTools lors de la mise en prod
 // rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


