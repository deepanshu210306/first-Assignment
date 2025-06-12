import { useState } from 'react';
import './Tabs.css';

const TabContent = ({ activeTab }) => {
  const undergraduateContent = [
    { 
      task: 'Design & Media', 
      description: 'Master fashion, graphic design at Italy’s top institutes (e.g., Polimoda, IED). Portfolio prep + EU internship access.',
      subcards: [
        { image: 'https://imgs.search.brave.com/QSpIytQNGR8q9KSnFfvfE7Wje5CnuGRVxssiauL9ShU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/NTM4NDUzMi9waG90/by9maWxtLWdsYXJl/LW5vaXNlLWFuZC1z/Y3JhdGNoZXMtb24t/YS1ibGFjay1iYWNr/Z3JvdW5kLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1EcHZ1/MFdlSjBmaFBPWkZM/NWF3a0FsZkJQTWkx/bXhrNk5Delcwb1dS/ajhVPQ', text: 'Fashion Design at ABC' },
        { image: 'https://imgs.search.brave.com/QSpIytQNGR8q9KSnFfvfE7Wje5CnuGRVxssiauL9ShU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/NTM4NDUzMi9waG90/by9maWxtLWdsYXJl/LW5vaXNlLWFuZC1z/Y3JhdGNoZXMtb24t/YS1ibGFjay1iYWNr/Z3JvdW5kLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1EcHZ1/MFdlSjBmaFBPWkZM/NWF3a0FsZkJQTWkx/bXhrNk5Delcwb1dS/ajhVPQ', text: 'Graphic Design at IED' },
        { image: 'https://imgs.search.brave.com/QSpIytQNGR8q9KSnFfvfE7Wje5CnuGRVxssiauL9ShU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/NTM4NDUzMi9waG90/by9maWxtLWdsYXJl/LW5vaXNlLWFuZC1z/Y3JhdGNoZXMtb24t/YS1ibGFjay1iYWNr/Z3JvdW5kLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1EcHZ1/MFdlSjBmaFBPWkZM/NWF3a0FsZkJQTWkx/bXhrNk5Delcwb1dS/ajhVPQ', text: 'Design ABC' }
      ]
    },
    { 
      task: 'Business', 
      description: 'BBA/MBA abroad in FinTech, Analytics & Economics. Top UK/Singapore unis with placement guarantees. STEM MBAs in USA (3-year visa).',
      subcards: [
        { image: 'https://via.placeholder.com/100', text: 'FinTech Specialization' },
        { image: 'https://via.placeholder.com/100', text: 'Analytics Programs' },
        { image: 'https://via.placeholder.com/100', text: 'STEM MBA Visa Benefits' }
      ]
    },
    { 
      task: 'Medicine', 
      description: 'MBBS/Nursing in UK/Philippines/Ukraine. NEET accepted. Shorter programs (4-5 yrs), clinical rotations, high FMGE pass rates.',
      subcards: [
        { image: 'https://via.placeholder.com/100', text: 'MBBS in UK' },
        { image: 'https://via.placeholder.com/100', text: 'Nursing Programs' },
        { image: 'https://via.placeholder.com/100', text: 'Clinical Rotations' }
      ]
    },
    { 
      task: 'STEM', 
      description: 'AI, Data Science & Engineering in Germany/USA. Tuition-free public unis, DAAD scholarships, 18-month PR pathways.',
      subcards: [
        { image: 'https://via.placeholder.com/100', text: 'AI Research' },
        { image: 'https://via.placeholder.com/100', text: 'Data Science Degrees' },
        { image: 'https://via.placeholder.com/100', text: 'Engineering Scholarships' }
      ]
    },
    { 
      task: 'Arts & Humanities', 
      description: 'Psychology, Literature & Digital Humanities in Ireland/Canada. Tech-integrated courses, affordable fees, 3-year post-study visas.',
      subcards: [
        { image: 'https://via.placeholder.com/100', text: 'Psychology Studies' },
        { image: 'https://via.placeholder.com/100', text: 'Digital Humanities' },
        { image: 'https://via.placeholder.com/100', text: 'Literature Programs' }
      ]
    },
    { 
      task: 'Hospitality', 
      description: 'Hotel Management & Culinary Arts in Switzerland/Australia. Paid internships (Swiss mandate), global placements with Marriott/Accor.',
      subcards: [
        { image: 'https://via.placeholder.com/100', text: 'Hotel Management' },
        { image: 'https://via.placeholder.com/100', text: 'Culinary Arts' },
        { image: 'https://via.placeholder.com/100', text: 'Global Placements' }
      ]
    },
  ];

  const postgraduateContent = [
    { 
      task: 'Business & Management', 
      description: 'MBA, Finance, Supply Chain Management',
      subcards: [
        { image: 'https://via.placeholder.com/100', text: 'MBA Programs' },
        { image: 'https://via.placeholder.com/100', text: 'Finance Courses' },
        { image: 'https://via.placeholder.com/100', text: 'Supply Chain' }
      ]
    },
    { 
      task: 'Data & AI', 
      description: 'Data Science, AI, Business Analytics',
      subcards: [
        { image: 'https://via.placeholder.com/100', text: 'Data Science' },
        { image: 'https://via.placeholder.com/100', text: 'AI Specialization' },
        { image: 'https://via.placeholder.com/100', text: 'Business Analytics' }
      ]
    },
    { 
      task: 'Engineering', 
      description: 'Robotics, Renewable Energy, CS',
      subcards: [
        { image: 'https://via.placeholder.com/100', text: 'Robotics' },
        { image: 'https://via.placeholder.com/100', text: 'Renewable Energy' },
        { image: 'https://via.placeholder.com/100', text: 'Computer Science' }
      ]
    },
    { 
      task: 'Public Policy/Social Sciences', 
      description: 'International Relations, Public Health',
      subcards: [
        { image: 'https://via.placeholder.com/100', text: 'International Relations' },
        { image: 'https://via.placeholder.com/100', text: 'Public Health' },
        { image: 'https://via.placeholder.com/100', text: 'Social Sciences' }
      ]
    },
    { 
      task: 'Creative Arts', 
      description: 'Game Design, UX/UI, Fashion Tech',
      subcards: [
        { image: 'https://via.placeholder.com/100', text: 'Game Design' },
        { image: 'https://via.placeholder.com/100', text: 'UX/UI Design' },
        { image: 'https://via.placeholder.com/100', text: 'Fashion Tech' }
      ]
    },
    { 
      task: 'Emerging Fields', 
      description: 'Sustainability, Biotechnology, Cybersecurity',
      subcards: [
        { image: 'https://via.placeholder.com/100', text: 'Sustainability' },
        { image: 'https://via.placeholder.com/100', text: 'Biotechnology' },
        { image: 'https://via.placeholder.com/100', text: 'Cybersecurity' }
      ]
    },
  ];

  const content = activeTab === 'undergraduate' ? undergraduateContent : postgraduateContent;
  const [selectedTask, setSelectedTask] = useState(content[0].task);

  const selectedItem = content.find(item => item.task === selectedTask);
  const selectedDescription = selectedItem?.description || '';
  const selectedSubcards = selectedItem?.subcards || [];

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
            <div className="subcards-container">
              {selectedSubcards.map((subcard, index) => (
                <div key={index} className="subcard">
                  <img src={subcard.image} alt={subcard.text} className="subcard-image" />
                  <p className="subcard-text">{subcard.text}</p>
                  <button className="subcard-button">View More</button>
                </div>
              ))}
            </div>
            <button className="view-all">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContent;