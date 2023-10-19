import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducer/rootReducer';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage: localStorage,
}

const middlewares = [thunk];
const persistentReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

