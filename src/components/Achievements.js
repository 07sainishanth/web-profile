import React from 'react';
import ProfileSection from './ProfileSection';
import achievements from '../data/achievements';

/**
 * Achievements section.
 */
function Achievements() {
  return (
    <ProfileSection title="Achievements" className="achievements">
      <ul>
        {achievements.map((item, idx) => (
          <li key={idx} style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '1.5em', borderRadius: '1em', color: '#fff' }}>
            <span dangerouslySetInnerHTML={{ __html: item.html }} />
          </li>
        ))}
      </ul>
    </ProfileSection>
  );
}

export default Achievements; 