import React from 'react';
import ProfileSection from './ProfileSection';
import { FaGithub, FaMicrophone, FaTrophy } from 'react-icons/fa';

const activityItems = [
  {
    type: 'github',
    icon: <FaGithub />,
    title: 'Contributed to open source',
    date: '2024-06-10',
    desc: 'Fixed bugs and improved documentation for a popular React library.'
  },
  {
    type: 'talk',
    icon: <FaMicrophone />,
    title: 'Spoke at React Summit',
    date: '2024-05-22',
    desc: 'Gave a talk on "Building Dynamic Portfolios with React and Framer Motion".'
  },
  {
    type: 'award',
    icon: <FaTrophy />,
    title: 'Won IITPKD Hackathon',
    date: '2023-11-15',
    desc: 'Led a team to victory in a 24-hour hackathon at IIT Palakkad.'
  }
];

function Activity() {
  return (
    <ProfileSection title="Activity" className="activity-section">
      <div className="activity-grid">
        {activityItems.map((item, idx) => (
          <div className="activity-card" key={idx}>
            <div className="activity-icon">{item.icon}</div>
            <div className="activity-content">
              <div className="activity-title">{item.title}</div>
              <div className="activity-date">{item.date}</div>
              <div className="activity-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </ProfileSection>
  );
}

export default Activity; 