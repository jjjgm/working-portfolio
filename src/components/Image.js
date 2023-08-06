import React from 'react';

import './styles/Image.css';


function Image()
{
    return (
        <div>
            <section>
                <div className="grid-flex">
                    <div className="col col-image" style={ { backgroundImage: "url(https://res.cloudinary.com/dtczjnpem/image/upload/v1687417784/casestudy_i2fqdo.jpg)" } } alt="Portrait at the Stahl Case Study House">
                    </div>
                    <div className="col col-text">
                        <div className="Aligner-item">
                            <p>
                                I'm a passionate developer with strong problem-solving skills, an all-around passion for organization, and an ongoing drive to continue learning.
                            </p>
                            <br />
                            <br />
                            <p>

                                Currently, I'm diving into learning more about Automation & Machine Learning.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid-flex">
                    <div className="col col-image" style={ { backgroundImage: "url(https://res.cloudinary.com/dtczjnpem/image/upload/v1687421979/7EF00928-1CB0-49F5-A19A-86FAEBC48B51_uigldq.jpg)" } } alt="Cycling photo sitting by the Hollywood sign">
                        &nbsp;
                    </div>
                    <div className="col col-text col-left">
                        <div className="Aligner-item">

                            <p> In addition to programming and coding, I find joy in exploring local museums & restaurants, cycling with friends, listening to podcasts, solving puzzles, learning cooking techniques, and occasionally indulging in an evening gaming session.
                                <br />
                            </p>

                        </div>
                    </div>
                </div>

                {/* <div className="grid-flex">
                    <div className="col col-image" style={ { backgroundImage: "url(https://res.cloudinary.com/dtczjnpem/image/upload/v1687418911/11C2FA46-4AD7-423D-946C-5E1E9297401E_1_105_c_vvmbf4.jpg)" } } alt="A portrait in Napa, CA">
                        &nbsp;
                    </div>
                    <div className="col col-text">
                        <div className="Aligner-item">
                            <p>I am thrilled to connect with like-minded peers and contribute to impactful projects. Let's collaborate and create something truly amazing together!
                            </p>
                        </div>
                    </div>
                </div> */}

            </section>
        </div>

    )
}

export default Image