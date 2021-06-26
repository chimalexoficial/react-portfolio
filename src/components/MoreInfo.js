import React from 'react';

export const MoreInfo = () => {
    return(
        <div id="moreInfo">
            <section className="resume-section">
                <div className="resume-section-content">
                    <h2 className="mb-5">More Info</h2>
                    <p>This portfolio as a personal project was developed with React</p>
                    <p>Was used Bootstrap to main styles, Font Awesome Icons for React and React Tooltip</p>
                    <p>Data for my "Projects" section is using a JSON file to simulate a database, information is dynamically inserted with the map function of Javascript.</p>
                    <br/>
                    <h3>View source code on Github</h3>
                </div>
            </section>
        </div>
    )
}