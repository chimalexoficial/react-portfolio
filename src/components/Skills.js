import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faWordpress, faReact, faNpm, faBootstrap, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';

export const Skills = () => {
    return (
        <div id="skills">
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages / Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item" data-tip="HTML5">
                            <FontAwesomeIcon icon={faHtml5} />
                        </li>
                        <li className="list-inline-item" data-tip="CSS3">
                            <FontAwesomeIcon icon={faCss3Alt} />
                        </li>
                        <li className="list-inline-item" data-tip="Javascript">
                            <FontAwesomeIcon icon={faJsSquare} />
                        </li>
                        <li className="list-inline-item" data-tip="SQL/Express">
                            <FontAwesomeIcon icon={faDatabase} />
                        </li>
                        <li className="list-inline-item" data-tip="Bootstrap">
                            <FontAwesomeIcon icon={faBootstrap} />
                        </li>
                        <li className="list-inline-item" data-tip="Github">
                            <FontAwesomeIcon icon={faGithubSquare} />
                        </li>
                        <li className="list-inline-item" data-tip="Wordpress">
                            <FontAwesomeIcon icon={faWordpress} />
                        </li>
                        <li className="list-inline-item" data-tip="React">
                            <FontAwesomeIcon icon={faReact} />
                        </li>
                        <li className="list-inline-item" data-tip="NPM">
                            <FontAwesomeIcon icon={faNpm} />
                        </li>
                    </ul>
                    <ReactTooltip />
                    <p>HTML, CSS, Javascript, Vanilla Javascript, React, Bootstrap, Tailwind CSS, SQL, DynamoDB, MySQL,
                        Wordpress, SquareUp, CMS, Cloud Computing, Amazon Web Services, Linux, Ansible, Jenkins, Terraform, Docker. </p>
                </div>
            </section>
        </div>
    )
}