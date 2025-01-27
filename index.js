
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import App from './CrudApp/App';
import store from './CrudApp/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);


