import React from 'react';
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faDownload, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ReactTooltip from 'react-tooltip';
import Button from 'react-bootstrap/Button';

export const About = (() => {
  return (
      <div id="#about">
        <div className="container-fluid p-0">
          <section className="resume-section" id="about">
            <div className="resume-section-content">
              <h2 id="name" className="mb-0">Arturo Salgado</h2>
              <h3>FrontEnd Web Developer</h3>
              <h4>Engineering Software Degree</h4>
              <p> <FontAwesomeIcon icon={faMapMarkerAlt} /> Los Ángeles, CA</p>
              <a href="mailto:usasalgado@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> usasalgado@gmail.com</a><br />
              <a href="tel:+13237993259">
                <FontAwesomeIcon icon={faPhone} /> (323)-799-3259</a>
              <hr />
              <p className="lead mb-5">Recent engineering degree (December 2020) recipient with a background in web development.<br /> Over 4 years of experience working making Wordpress sites for small companies to reach customers. <br /> Seeking to become a front end developer to next level.</p>

              <div className="social-icons">
                <a className="social-icon" href="https://www.linkedin.com/in/alexis-salgado-963832127/" data-tip="View Linkedin Profile" target="_blank" rel="noreferrer">
                  <i><FontAwesomeIcon icon={faLinkedin} /></i>
                </a>
                <a className="social-icon" href="https://github.com/chimalexoficial" data-tip="View Github Profile" target="_blank" rel="noreferrer" >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="social-icon" href="#!" data-tip="Download CV" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faDownload} />
                </a>
                <ReactTooltip />
              </div>

              <Button variant="primary" href="#projects">SEE PROJECTS</Button>

            </div>
          </section>
        </div>
      </div>
  )
})
