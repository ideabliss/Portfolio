import React from 'react';
import './Recentwork.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import designerImg from '../IMAGE/disgner.png';
import websiteImg from '../IMAGE/website.png';
import appImg from '../IMAGE/application.png';

const works = [
  { name: 'Designer', img: designerImg },
  { name: 'Website', img: websiteImg },
  { name: 'Application', img: appImg },
];

const RecentWork = () => {
  return (
    <section className="recent-work-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold text-white">
              My <span className="text-warning">Domain</span>
            </h2>
            <p className="text-light">
              Explore my latest designs, websites, and applications
            </p>
          </div>
        </div>

        {/* Work Grid */}
        <div className="row justify-content-center">
          {works.map((work, index) => (
            <div
              key={index}
              className="col-10 col-sm-6 col-md-4 col-lg-3 mb-4 work-card-wrapper"
            >
              <div className="work-card">
                <img
                  src={work.img}
                  alt={work.name}
                  className="img-fluid rounded"
                />
                <div className="overlay text-white">
                  <h5 className="fw-semibold mb-0">{work.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
