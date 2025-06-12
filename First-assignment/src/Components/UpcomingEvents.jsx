import React from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const events = [
    {
      title: 'Study Abroad Expo 2025',
      date: 'July 15, 2025',
      location: 'Florence, Italy',
      description: 'Join us to explore study abroad opportunities and meet university representatives.',
      link: '#',
    },
    {
      title: 'Scholarship Workshop',
      date: 'August 5, 2025',
      location: 'Paris, France',
      description: 'Learn how to apply for scholarships and fund your education abroad.',
      link: '#',
    },
    {
      title: 'Career Guidance Seminar',
      date: 'August 20, 2025',
      location: 'Delhi, India',
      description: 'Get expert advice on career paths and international job opportunities.',
      link: '#',
    },
  ];

  return (
    <section className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <a href={event.link} key={index} className="event-card">
            <div className="event-icon">[Icon or image]</div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-meta">{event.date} | {event.location}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;