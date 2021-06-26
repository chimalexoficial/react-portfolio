import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills'
import { Interests } from './components/Interests';
import { MoreInfo } from './components/MoreInfo';

ReactDOM.render(
  <>
    <About />
    <Navbar />
    <Projects />
    <Skills />
    <Interests />
    <MoreInfo/>
  </>,
  document.getElementById('root')
);
