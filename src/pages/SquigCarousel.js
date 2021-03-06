import React from "react";

/* TILRETTET FRA GALLERCARD.JS */

const SquigCarousel = (props) => {
  const { images } = props;
  const wipList = images.map((image) => {
    return (
      <div key={image.id}>
        <a className="carousel-item">
          <img
            className="z-depth-1"
            src={window.location.origin + "/images/squigs/" + image.image}
            alt={image.title}
          />
        </a>
      </div>
    );
  });
  return (
    <div>
      <div className="section">
        <h4 className="center">Breathing some life into a Colossal Squig</h4>
      </div>
      <div className="carousel">{wipList}</div>
    </div>
  );
};

export default SquigCarousel;
