import { useState } from 'react';
import TabContent from './TabContent';
import './Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('undergraduate');

  return (
    <div className="tabs-container container">
      <div className="vertical-tabs">
        <button
          className={activeTab === 'undergraduate' ? 'active' : ''}
          onClick={() => setActiveTab('undergraduate')}
        >
          Undergraduate Programs
        </button>
        <button
          className={activeTab === 'postgraduate' ? 'active' : ''}
          onClick={() => setActiveTab('postgraduate')}
        >
          Postgraduate Programs
        </button>
      </div>

      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default Tabs;