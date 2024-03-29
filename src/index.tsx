import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
// connecting redux
import { Provider } from 'react-redux';
import { store, persistor }  from './state/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
