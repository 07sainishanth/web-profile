import React from 'react';
import ProfileSection from './ProfileSection';
import publications from '../data/publications';

/**
 * Publications section.
 */
function Publications() {
  return (
    <ProfileSection title="Publications" className="publications">
      <ul>
        {publications.map((pub, idx) => (
          <li key={idx}>
            <strong>{pub.title}</strong> – {pub.venue}
          </li>
        ))}
      </ul>
    </ProfileSection>
  );
}

export default Publications; 