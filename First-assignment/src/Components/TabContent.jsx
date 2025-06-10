import { useState } from 'react';

const TabContent = ({ activeTab }) => {
  const undergraduateContent = [
    { task: 'Design & Media', description: 'Master fashion, graphic design at Italy’s top institutes (e.g., Polimoda, IED). Portfolio prep + EU internship access.' },
    { task: 'Business', description: 'BBA/MBA abroad in FinTech, Analytics & Economics. Top UK/Singapore unis with placement guarantees. STEM MBAs in USA (3-year visa).' },
    { task: 'Medicine', description: 'MBBS/Nursing in UK/Philippines/Ukraine. NEET accepted. Shorter programs (4-5 yrs), clinical rotations, high FMGE pass rates.' },
    { task: 'STEM', description: 'AI, Data Science & Engineering in Germany/USA. Tuition-free public unis, DAAD scholarships, 18-month PR pathways.' },
    { task: 'Arts & Humanities', description: 'Psychology, Literature & Digital Humanities in Ireland/Canada. Tech-integrated courses, affordable fees, 3-year post-study visas.' },
    { task: 'Hospitality', description: 'Hotel Management & Culinary Arts in Switzerland/Australia. Paid internships (Swiss mandate), global placements with Marriott/Accor.' },
  ];

  const postgraduateContent = [
    { task: 'Business & Management', description: 'MBA, Finance, Supply Chain Management' },
    { task: 'Data & AI', description: 'Data Science, AI, Business Analytics' },
    { task: 'Engineering', description: 'Robotics, Renewable Energy, CS' },
    { task: 'Public Policy/Social Sciences', description: 'International Relations, Public Health' },
    { task: 'Creative Arts', description: 'Game Design, UX/UI, Fashion Tech' },
    { task: 'Emerging Fields', description: 'Sustainability, Biotechnology, Cybersecurity' },
  ];

  const content = activeTab === 'undergraduate' ? undergraduateContent : postgraduateContent;
  const [selectedTask, setSelectedTask] = useState(content[0].task);

  const selectedDescription = content.find(item => item.task === selectedTask)?.description || '';

  return (
    <div className="tab-content">
      <div className="content-layout">
        <div className="task-list">
          {content.map((item, index) => (
            <button
              key={index}
              className={`task-item ${selectedTask === item.task ? 'active' : ''}`}
              onClick={() => setSelectedTask(item.task)}
            >
              {item.task}
            </button>
          ))}
        </div>
        <div className="description-area">
          <div className="description-item">
            <h3>{selectedTask}</h3>
            <p>{selectedDescription}</p>
            <button className="view-details">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContent;