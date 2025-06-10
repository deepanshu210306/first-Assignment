
import React, { useState } from 'react';
import './Card.css';
import uslogo from './USA.svg';
import uklogo from './UK.svg';
import Francelogo from './France.svg';
import Canadalogo from './Canada.svg';
import Germanylogo from './Germany.svg';
import Italylogo from './Italy.svg';
import Auslogo from './Australia.svg';
import Irelogo from './Ireland.svg';
const Destinations = () => {
  const [selectedCountry, setSelectedCountry] = useState('USA');

  const destinations = [
    {
      country: 'USA',
      flag:  uslogo,
      place: {
        title: 'New York City',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
        description: 'Discover iconic landmarks like Times Square, Central Park, and the Statue of Liberty in this vibrant metropolis.<br> <a href="link" class="explore-link">Explore More</a> '},
      
    },
    {
      country: 'France',
      flag: Francelogo,
      place: {
        title: 'Paris',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
        description: 'Explore the Eiffel Tower, Louvre Museum, and charming cafés along the Seine in the romantic capital.<br> <a href="/explore/france/paris" class="explore-link">Explore More</a>'
      },
    },
    {
      country: 'Canada',
      flag: Canadalogo,
      place: {
        title: 'Vancouver',
        image: 'https://images.unsplash.com/photo-1492138786289-d35ea832da43',
        description: 'Experience Stanley Park, Granville Island, and stunning mountain views in this coastal gem.<br> <a href="/explore/france/paris" class="explore-link">Explore More</a>',
      },
    },
    {
      country: 'Germany',
      flag: Germanylogo,
      place: {
        title: 'Berlin',
        image: 'https://images.unsplash.com/photo-1492138786289-d35ea832da43',
        description: 'Visit the Brandenburg Gate, Berlin Wall, and vibrant cultural scenes in this historic capital.<br> <a href="/explore/france/paris" class="explore-link">Explore More</a>',
      },
    },
    {
      country: 'Italy',
      flag: Italylogo,
      place: {
        title: 'Rome',
        image: 'https://images.unsplash.com/photo-1492138786289-d35ea832da43',
        description: 'Explore the Colosseum, Roman Forum, and authentic Italian cuisine in the Eternal City.<br> <a href="/explore/france/paris" class="explore-link">Explore More</a>',
      },
    },
    {
      country: 'Australia',
      flag: Auslogo,
      place: {
        title: 'Sydney',
        image: 'https://images.unsplash.com/photo-1492138786289-d35ea832da43',
        description: 'See the Sydney Opera House, Harbour Bridge, and relax at Bondi Beach in this vibrant city. <br> <a href="/explore/france/paris" class="explore-link">Explore More</a>',
      },
    },
    {
      country: 'Ireland',
      flag: Irelogo,
      place: {
        title: 'Dublin',
         image: 'https://images.unsplash.com/photo-1492138786289-d35ea832da43',
        description: 'Visit Trinity College, Guinness Storehouse, and lively pubs in this cultural hub.<br> <a href="/explore/france/paris" class="explore-link">Explore More</a>',
      },
    },
    {
      country: 'UK',
      flag: uklogo,
      place: {
        title: 'London',
        image: 'https://images.unsplash.com/photo-1492138786289-d35ea832da43',
        description: 'Explore Big Ben, Buckingham Palace, and vibrant markets in this historic capital.<br> <a href="/explore/france/paris" class="explore-link">Explore More</a>',
      },
    },
  ];

  return (
    <div className="destinations-container">
      <h1>Popular Destinations</h1>
      <div className="flag-buttons">
        {destinations.map((countryData) => (
          <button
            key={countryData.country}
            className={`flag-button ${selectedCountry === countryData.country ? 'active' : ''}`}
            onClick={() => setSelectedCountry(countryData.country)}
            title={countryData.country}
          >
            <img src={countryData.flag} alt={`${countryData.country} flag`} />
          </button>
        ))}
      </div>
      {destinations
        .filter((countryData) => countryData.country === selectedCountry)
        .map((countryData, index) => (
          <div key={index} className="destination-section">
            <div className="destination-content">
              <div className="destination-image">
                <img src={countryData.place.image} alt={countryData.place.title} />
              </div>
              <div className="destination-details">
                <h2>{countryData.country}</h2>
                <h3>{countryData.place.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: countryData.place.description }} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Destinations;
