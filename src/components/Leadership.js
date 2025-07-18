import React from 'react';
import leadership from '../data/leadership';
import ProfileSection from './ProfileSection';

const Leadership = () => (
  <ProfileSection title="Leadership" className="leadership">
    <ul>
      {leadership.map((item, idx) => (
        <li key={idx} style={{ marginBottom: '1.5em' }}>
          <strong>{item.title}</strong> <span style={{ color: '#888', fontSize: '0.95em' }}>({item.year})</span>
          <div style={{ margin: '0.5em 0' }}>{item.description}</div>
          <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkLabel}</a>
        </li>
      ))}
    </ul>
  </ProfileSection>
);

export default Leadership; 