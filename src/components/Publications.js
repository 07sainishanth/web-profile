import React from 'react';
import ProfileSection from './ProfileSection';
import publications from '../data/publications';
import PropTypes from 'prop-types';

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

Publications.propTypes = {};

export default Publications; 