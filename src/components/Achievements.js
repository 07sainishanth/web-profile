import React from 'react';
import ProfileSection from './ProfileSection';
import achievements from '../data/achievements';
import PropTypes from 'prop-types';

/**
 * Achievements section.
 */
function Achievements() {
  return (
    <ProfileSection title="Achievements" className="achievements">
      <ul>
        {achievements.map((item, idx) => (
          <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </ProfileSection>
  );
}

Achievements.propTypes = {};

export default Achievements; 