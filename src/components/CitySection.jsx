import React from 'react';
import Attraction from './Attraction'; // Import the Attraction component

/*import { CITIES_DATA } from '..constants';*/

class CitySection extends React.Component {
    render() {
        try {
            const { name, history, culture, attractions, images } = this.props.city;
            
            return (
                <section 
                    id={name.toLowerCase()} 
                    className="city-section"
                    data-name={`city-section-${name.toLowerCase()}`}
                >
                    <div className="container">
                        <div className="city-grid">
                            <div className="city-content">
                                <h2 className="city-title" data-name="city-title">{name}</h2>
                                <div className="city-description" data-name="city-history">
                                    <h3 className="text-xl font-bold mb-2">History</h3>
                                    <p>{history}</p>
                                </div>
                                <div className="city-description" data-name="city-culture">
                                    <h3 className="text-xl font-bold mb-2">Culture</h3>
                                    <p>{culture}</p>
                                </div>
                            </div>
                            <div className="city-image-gallery" data-name="city-gallery">
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${name} - Image ${index + 1}`}
                                        className="city-image"
                                        data-name={`city-image-${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="attractions-grid" data-name="attractions-grid">
                            {attractions.map((attraction, index) => (
                                <Attraction
                                    key={index}
                                    {...attraction}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            );
        } catch (error) {
            console.error('CitySection render error:', error);
            reportError(error);
            return null;
        }
    }
}
export default CitySection;