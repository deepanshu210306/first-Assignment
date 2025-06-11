import React from 'react';
import './ScholarshipCard.css';

const ScholarshipCard = () => {
  const scholarship = {
    university: 'Global University',
    description: 'Global University offers the Excellence Scholarship for international students pursuing undergraduate and postgraduate degrees. This merit-based scholarship covers up to 50% of tuition fees for students who demonstrate outstanding academic performance, leadership skills, and a commitment to community service. Recipients are also eligible for mentorship programs and networking opportunities with industry leaders. The scholarship is renewable each year, provided the student maintains a GPA of 3.5 or higher. Applications are open annually from January to March, and candidates must submit a personal statement, academic transcripts, and two letters of recommendation.',
  };

  return (
    <div className="scholarship-container">
      <h1>Featured Scholarship</h1>
      <div className="scholarship-card">
        <div className="university-name">
          <h2>{scholarship.university}</h2>
        </div>
        <div className="scholarship-description">
          <p>{scholarship.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;