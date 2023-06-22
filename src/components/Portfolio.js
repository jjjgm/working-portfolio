import React from 'react';

import './styles/Portfolio.css';
import { DiGithubFull } from "react-icons/di";

function Portfolio() {
    return (
        <div className="portfolio-grid">

            <figure>
                {/* image */}
                <caption>
                    <a href="https://fast-mesa-10038.herokuapp.com/">
                        <h3>Techfluencer Blog</h3>
                    </a>
                </caption>
                <p className="figure-text">
                    A blog for tech related posts. Ability to comment (once logged in) on other posts, delete your posts, and previous comments.
                    <br/>
                    <br/>
                    Tools & Technologies:
          <br/>
                    <strong>
                    JavaScript, mySQL, Sequelize, Express.js, Handlebars, Bootstrap</strong>
                </p>
                <a href="https://github.com/jjjgm/blogging-techfluencer">
                        <h4 className="figure-icon"><DiGithubFull/></h4>
                    </a>
            </figure>

            <figure>
                {/* image */}
                <caption>
                    <a href="https://jjjgm.github.io/jjjgm-reactfolio/">
                        <h3>Student Portfolio</h3>
                    </a>
                </caption>
                <p className="figure-text">
                A Portfolio to showcase all student works using react hash routing.

                <br/>
                    <br/>
                    Tools & Technologies:
          <br/>
                    <strong>Javascript, Node, React</strong>
                </p>
                <a href="https://github.com/jjjgm/blogging-techfluencer">
                        <h4 className="figure-icon"><DiGithubFull/></h4>
                    </a>
            </figure>

            <figure>
                {/* image */}
                <caption>
                    <a href="https://github.com/jjjgm/the-back-of-the-shop">
                        <h3>'Server Side' E-Commerce</h3>
                    </a>
                </caption>
                <p className="figure-text">
                    ORM database for an E-commerce platform that showcases table relationships. 
                    <br/>
                    <br/>
                    Tools & Technologies:
          <br/>
                    <strong>Javascript, Express.js, MySql, Sequelize, Insomnia</strong>
                </p>
                <a href="https://github.com/jjjgm/the-back-of-the-shop">
                        <h4 className="figure-icon"><DiGithubFull/></h4>
                    </a>
            </figure>

            <figure>
                {/* image */}
                <caption>
                    <a href="https://autohome.github.io/jenhua-joerdo/">
                        <h3>Stylist.Ai</h3>
                    </a>
                </caption>
                <p className="figure-text">
                Stylist.Ai generates a three piece ensemble based off of any occasion, event, or setting that a 'user' requests. The 'user' has the option to shop for and save their favorite pieces.
                <br/>
                <br/>
                Tools & Technologies:
          <br/>
                <strong>JavaScript, HTML, CSS, Bootstrap, OpenAI API, GoogleScrape API
                </strong>
                </p>
                <a href="https://github.com/autohome/jenhua-joerdo">
                        <h4 className="figure-icon"><DiGithubFull/></h4>
                    </a>
            </figure>

            <figure>
                {/* image */}
                <caption>
                    <a href="https://polar-basin-38495.herokuapp.com/">
                        <h3>BandMatch</h3>
                    </a>
                </caption>
                <p className="figure-text">
                A posting board and social network for musically inclined individuals to seek new bandmates, jam sessions, or connect over similar musical interests. Your new 'Bandmatch' awaits.
                <br/>
                <br/>
          Tools & Technologies:
          <br/>
          <strong>JavaScript, MongoDB, Mongoose, Apollo-Express, GraphQl, React, Cloudinary</strong>
          </p>
                <a href="https://github.com/Kriskris9/BandMatch">
                        <h4 className="figure-icon"><DiGithubFull/></h4>
                    </a>
            </figure>

            <figure>
                {/* image */}
                <caption>
                    <a href="https://lit-ocean-94336.herokuapp.com/login" >
                        <h3>Thank You for Being a Friend</h3>
                    </a>
                </caption>
                <p className="figure-text">
                A social-network profile/board for a 'user' and their pet(s). Match-up your furry friends and plan your to next adventure together!
                <br/>
                <br/>
                Tools & Technologies:
          <br/>
                <strong>JavaScript, CSS, Cloudinary, mySQL, Sequelize</strong>
                </p>
                <a href="https://github.com/jjjgm/gg-get-icecream">
                        <h4 className="figure-icon"><DiGithubFull/></h4>
                    </a>
            </figure>

        </div>

    )
}

export default Portfolio