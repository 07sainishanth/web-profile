import React from 'react';
import ProfileSection from './ProfileSection';
import education from '../data/education';

/**
 * Education section.
 */
function Education() {
  return (
    <ProfileSection title="Education" className="education">
      <ul>
        {education.map((edu, idx) => (
          <li key={idx}>
            <strong>{edu.institution}</strong>, {edu.location}<br />
            {edu.degree}<br />
            {edu.period}<br />
            <em>Coursework:</em> {edu.coursework.join(', ')}
          </li>
        ))}
      </ul>
    </ProfileSection>
  );
}

export default Education; 