import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import Header from './components/Header.js'


ReactDOM.render(
    <React.StrictMode>
        <Header />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);