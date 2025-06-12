import React, { useState } from 'react';
import './Services.css';
import flightIcon from './Search.svg';
import hotelIcon from './Search.svg';
import tourIcon from './Search.svg';
import carIcon from './Search.svg';
import cruiseIcon from './Search.svg';
import activityIcon from './Search.svg';
import insuranceIcon from './Search.svg';
import visaIcon from './Search.svg';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { service: 'Flights', icon: flightIcon, link: '/flights' },
    { service: 'Hotels', icon: hotelIcon, link: '/hotels' },
    { service: 'Tours', icon: tourIcon, link: '/tours' },
    { service: 'Cars', icon: carIcon, link: '/cars' },
    { service: 'Cruises', icon: cruiseIcon, link: '/cruises' },
    { service: 'Activities', icon: activityIcon, link: '/activities' },
    { service: 'Insurance', icon: insuranceIcon, link: '/insurance' },
    { service: 'Visas', icon: visaIcon, link: '/visas' },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="service-grid">
        {services.map((serviceData) => (
          <a
            key={serviceData.service}
            href={serviceData.link}
            className="service-button"
            title={serviceData.service}
            onClick={() => setSelectedService(serviceData.service)}
          >
            <img src={serviceData.icon} alt={`${serviceData.service} icon`} />
            <span className="service-name">{serviceData.service}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;