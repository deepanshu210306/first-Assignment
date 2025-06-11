import React, { useState } from 'react';
import './Destinations.css';
import uslogo from './USA.svg';
import uklogo from './UK.svg';
import Francelogo from './France.svg';
import Canadalogo from './Canada.svg';
import Germanylogo from './Germany.svg';
import Italylogo from './Italy.svg';
import Auslogo from './Australia.svg';
import Irelogo from './Ireland.svg';

const Destinations = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const destinations = [
    { country: 'USA', flag: uslogo, link: '/explore/usa' },
    { country: 'France', flag: Francelogo, link: '/explore/france' },
    { country: 'Canada', flag: Canadalogo, link: '/explore/canada' },
    { country: 'Germany', flag: Germanylogo, link: '/explore/germany' },
    { country: 'Italy', flag: Italylogo, link: '/explore/italy' },
    { country: 'Australia', flag: Auslogo, link: '/explore/australia' },
    { country: 'Ireland', flag: Irelogo, link: '/explore/ireland' },
    { country: 'UK', flag: uklogo, link: '/explore/uk' },
  ];

  return (
    <div className="destinations-container">
      <h1>Popular Destinations</h1>
      <div className="flag-grid">
        {destinations.map((countryData) => (
          <a
            key={countryData.country}
            href={countryData.link}
            className="flag-button"
            title={countryData.country}
            onClick={() => setSelectedCountry(countryData.country)}
          >
            <img src={countryData.flag} alt={`${countryData.country} flag`} />
            <span className="country-name">{countryData.country}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Destinations;