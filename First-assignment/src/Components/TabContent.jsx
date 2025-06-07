import Card from './Card';

const TabContent = ({ activeTab }) => {
  const undergraduateContent = [
    { title: 'Design & Media ', description: 'Master fashion, graphic design at Italy’s top institutes (e.g., Polimoda, IED). Portfolio prep + EU internship access.' },
    { title: 'Business', description: " BBA/MBA abroad in FinTech, Analytics & Economics. Top UK/Singapore unis with placement guarantees. STEM MBAs in USA (3-year visa)." },
    { title: 'Medicine', description: 'MBBS/Nursing in UK/Philippines/Ukraine. NEET accepted. Shorter programs (4-5 yrs), clinical rotations, high FMGE pass rates.' },
    { title: 'STEM', description: 'AI, Data Science & Engineering in Germany/USA. Tuition-free public unis, DAAD scholarships, 18-month PR pathways.' },
    { title: 'Arts & Humanities', description: 'Psychology, Literature & Digital Humanities in Ireland/Canada. Tech-integrated courses, affordable fees, 3-year post-study visas.' },
    { title: 'Hospitality', description: 'Hotel Management & Culinary Arts in Switzerland/Australia. Paid internships (Swiss mandate), global placements with Marriott/Accor.' },
  ];

  const postgraduateContent = [
    { title: 'Business & Management', description: 'MBA, Finance, Supply Chain Management' },
    { title: 'Data & AI', description: 'Data Science, AI, Business Analytics' },
    { title: 'Engineering', description: 'Robotics, Renewable Energy, CS' },
    { title: 'Public Policy/Social Sciences', description: 'International Relations, Public Health' },
    { title: 'Creative Arts', description: 'Game Design, UX/UI, Fashion Tech' },
    { title: 'Emerging Fields', description: 'Sustainability, Biotechnology, Cybersecurity' },
  ];

  const cards = activeTab === 'undergraduate' ? undergraduateContent : postgraduateContent;

  return (
    <div className="tab-content">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default TabContent;