import React from 'react';

const Attraction = ({ name, description, location, videoUrl }) => {
  try {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md" data-name={`attraction-${name.toLowerCase()}`}>
        <h3 className="text-xl font-bold mb-2 text-accent" data-name="attraction-title">
          {name}
        </h3>
        <p className="mb-4 text-gray-600" data-name="attraction-description">
          {description}
        </p>
        <div className="flex items-center gap-4" data-name="attraction-links">
          <a
            href={location}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-highlight hover:text-accent"
            data-name="attraction-location-link"
          >
            <i className="fas fa-map-marker-alt mr-2"></i>
            View Location
          </a>
        </div>
        {videoUrl && (
            <iframe
            src={videoUrl}
            title={name}
            className="attraction-video"
            allowFullScreen
            data-name="attraction-video"
            ></iframe>
        )}
      </div>
    );
  } catch (error) {
    console.error('Attraction render error:', error);
    reportError(error);
    return null;
  }
};

export default Attraction;