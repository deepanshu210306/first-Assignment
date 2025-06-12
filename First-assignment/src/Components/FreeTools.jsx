import React from 'react';
import './FreeTools.css';

const FreeTools = () => {
  const tools = [
    {
      name: 'GPA Calculator',
      description: 'Easily calculate your GPA to track academic progress.',
      link: '#',
    },
    {
      name: 'IELTS Band Calculator',
      description: 'Estimate your IELTS band score with our simple tool.',
      link: '#',
    },
    {
      name: 'SOP Writer',
      description: 'Craft a compelling Statement of Purpose effortlessly.',
      link: '#',
    },
    {
      name: 'Essay GPT',
      description: 'Generate high-quality essays with AI assistance.',
      link: '#',
    },
  ];

  return (
    <section className="free-tools">
      <h2>Free Tools</h2>
      <div className="tools-container">
        {tools.map((tool, index) => (
          <a href={tool.link} key={index} className="tool-card">
            
            <div className="tool-content">
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FreeTools;