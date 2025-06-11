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
    { service: 'ABC', icon: flightIcon,link:'link' },
    { service: 'ABC', icon: hotelIcon },
    { service: 'ABC', icon: tourIcon},
    { service: 'ABC', icon: carIcon},
    { service: 'ABC', icon: cruiseIcon},
    { service: 'ABC', icon: activityIcon},
    { service: 'ABC', icon: insuranceIcon},
    { service: 'ABC', icon: visaIcon},
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