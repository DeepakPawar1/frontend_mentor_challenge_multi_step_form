import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import dataContext from './context/data';
// import { cdata } from './context/cdata';
import { Provider } from './context/data';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
    <App />

    </Provider>

);

