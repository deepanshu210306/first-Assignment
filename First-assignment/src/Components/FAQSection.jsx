import React, { useState } from 'react';
import './FAQSection.css';
import icon from './icon.svg'; // Importing the SVG file from the same directory

const FAQSection = () => {
  const faqs = [
    {
      question: 'What are the eligibility criteria for scholarships?',
      answer: 'Nhi bataunga',
    },
    {
      question: 'How do I apply for a program?',
      answer: 'Nhi bataunga',
    },
    {
      question: 'Are online courses available for these programs?',
      answer: 'Nhi bataunga',
    },
    {
      question: 'What is the deadline for scholarship applications?',
      answer: 'Nhi bataunga',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h2>{faq.question}</h2>
              <img
                src={icon}
                alt="Toggle FAQ"
                className={`faq-icon ${openIndex === index ? 'open' : ''}`}
              />
            </div>
            <div
              className={`faq-answer ${openIndex === index ? 'open' : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;