import React from 'react';
import ProfileSection from './ProfileSection';
import activity from '../data/activity';
import { FaGithub, FaMicrophone, FaTrophy } from 'react-icons/fa';

const iconMap = {
  github: <FaGithub />,
  microphone: <FaMicrophone />,
  trophy: <FaTrophy />,
};

function Activity() {
  return (
    <ProfileSection title="Activity" className="activity-section">
      <div className="activity-grid">
        {activity.map((item, idx) => (
          <div className="activity-card" key={idx}>
            <div className="activity-icon">{iconMap[item.icon]}</div>
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