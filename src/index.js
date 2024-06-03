import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './Redux/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <HashRouter><App /></HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);



