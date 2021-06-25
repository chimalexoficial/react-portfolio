import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import About from './components/About';
import {Navbar} from './components/Navbar';

ReactDOM.render(
    <>
    <About />
    <Navbar />
    </>,
  document.getElementById('root')
);
