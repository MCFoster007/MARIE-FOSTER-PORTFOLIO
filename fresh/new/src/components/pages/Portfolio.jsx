// import React from 'react';
// import porscheImage from './assets/images/porschegreen.jpeg';
// import goonsImage from './assets/images/gg pic.jpeg';
// import cowsImage from './assets/images/cows.jpeg';
// import './Portfolio.css'; 

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="portfolio-container">
        <div className="portfolio-item">
          <img
            src="./assets/images/porschegreen.jpeg"
            alt="green targa porsche"
            className="portfolio-image"
          />
          <h3>
            <a href="https://github.com/MCFoster007/Choose-Your-Vehicle-Game">Vehicle Game</a>
          </h3>
        </div>

        <div className="portfolio-item">
          <img
            src="./assets/images/gg pic.jpeg"
            alt="gruesome goons"
            className="portfolio-image"
          />
          <h3>
            <a href="https://kyreej.github.io/project-1/">Gruesome Goons-group project</a>
          </h3>
        </div>

        <div className="portfolio-item">
          <img
            src="./assets/images/cows.jpeg"
            alt="cows"
            className="portfolio-image"
          />
          <p className="coming-soon-text">
            <b><i>Coming Soon</i></b>
          </p>
        </div>

        <div className="portfolio-item">
          <img
            src="./assets/images/cows.jpeg"
            alt="cows"
            className="portfolio-image"
          />
          <p className="coming-soon-text">
            <b><i>Coming Soon</i></b>
          </p>
        </div>
      </div>
    </div>
  );
}
