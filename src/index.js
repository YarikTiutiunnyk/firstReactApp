import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import  createAppStore from './store';
import { Provider } from 'react-redux';

const myAppStore = createAppStore();

/*myAppStore.dispatch({
  type: "ADD_FILM",
  payload: {
    id: 0,
    taitle: "Next Book 0"
  }
});*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myAppStore}>
      <App />
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
