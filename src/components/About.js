import React from 'react';

import './styles/About.css';

function About() {
    return (
        <div>
            <div className="about-grid">


                <h5>A BIT ABOUT ME</h5>


                {/* image */}
                <figure>
                    <p className="about-text">Growing up in the San Gabriel Valley region of Southern California, helped me develop a deep appreciation for the local mountain ranges, which fueled my love for the outdoors.
                    <br />
                    <br />
                   In addition to coding, I find joy in exploring local museums, cycling with friends, listening to podcasts, solving puzzles, and occasionally indulging in evening gaming sessions. I also enjoy challenging myself on my gravel bike and maximizing my passion for organization around the home.
                   <br />
                   <br />
                   I am thrilled to connect with like-minded peers and contribute to impactful projects. Let's collaborate and create something truly amazing together!</p>
                </figure>
            </div>
        </div>
    )
}

export default About;