import React from 'react';
import sites from '../data/sites.json';
import Button from 'react-bootstrap/Button';



export const Projects = (() => {
    return (
        <>
            <div id="projects">
                <h2 className="mb-5">Projects</h2>
                {
                    sites.map(site => <div key={site.title} className="container-fluid p-0">
                        <section className="resume-section">
                            <div className="resume-section-content">
                                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="flex-grow-1">
                                        <h3 className="mb-0">{site.title}</h3>
                                        <div className="subheading mb-3">Technology: {site.technology}</div>
                                        <p>{site.description}</p>
                                        <p><strong>Client from: </strong>{site.clientFrom}</p>
                                        <p><strong>Status: </strong>{site.status}</p>
                                        <p id="finished"><strong>Finished: </strong>{site.finished}</p>
                                        <Button variant="primary" href={site.domain}>VISIT WEBSITE</Button>
                                    </div>
                                    <div className="container shadow-strong p-3 rounded">
                                        <img className="img-sites" src={site.imgPreview} alt="Website" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <hr />
                    </div>)
                }
            </div>
        </>
    )
})