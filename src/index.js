import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import {About} from './components/About';
import {Navbar} from './components/Navbar';
import {Projects} from './components/Projects';

ReactDOM.render(
    <>
    <About />
    <Navbar />
    <Projects/>
    </>,
  document.getElementById('root')
);
