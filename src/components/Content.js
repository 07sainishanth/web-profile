import React from 'react';
import ProfileSection from './ProfileSection';
import content from '../data/content';

function Content() {
  return (
    <ProfileSection title="Content" className="content-section">
      <div className="content-grid">
        {content.map((item, idx) => (
          <a className="content-card" href={item.link} key={idx} target="_blank" rel="noopener noreferrer">
            <div className="content-title">{item.title}</div>
            <div className="content-date">{item.date}</div>
            <div className="content-summary">{item.summary}</div>
          </a>
        ))}
      </div>
    </ProfileSection>
  );
}

export default Content; 