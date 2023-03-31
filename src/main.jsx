import React from 'react';
import ReactDOM from 'react-dom/client';
import { reactState } from 'react-hands';
import App from './App';
import './index.css';

const initialState = { count: 0, isDarkMode: true };

const actions = {
  increment: (state, action) => ({ count: state.count + 1 }),
  decrement: (state, action) => ({ count: state.count - 1 }),
};

const { StoreProvider } = reactState(initialState, actions);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
