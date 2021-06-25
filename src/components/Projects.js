import React from 'react';
import sites from '../data/sites.json';

export const Projects = (() => {
    return (
        <>
            <h2 className="mb-5">Projects</h2>
            {
                sites.map(site => <div className="container-fluid p-0">
                    <section className="resume-section" id="experience">
                        <div className="resume-section-content">
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">{site.title}</h3>
                                    <div className="subheading mb-3"><a href={site.domain}>{site.domain}</a></div>
                                    <p>{site.description}</p>
                                </div>
                                <div className="container">
                                    <img className="img-sites" src={site.imgPreview} alt="Website" />
                                </div>
                            </div>



                        </div>
                    </section>
                </div>)
            }

        </>
    )
})