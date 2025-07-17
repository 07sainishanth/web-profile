import React from 'react';
import ProfileSection from './ProfileSection';
import qualifications from '../data/qualifications';

/**
 * Technical skills section.
 */
function Qualifications() {
  return (
    <ProfileSection title="Technical Skills" className="qualifications">
      <ul>
        <li><strong>Programming Languages:</strong> {qualifications.programmingLanguages.join(', ')}</li>
        <li><strong>Databases:</strong> {qualifications.databases.join(', ')}</li>
        <li><strong>Frameworks:</strong> {qualifications.frameworks.join(', ')}</li>
        <li><strong>Tools & Technologies:</strong> {qualifications.toolsTechnologies.join(', ')}</li>
      </ul>
    </ProfileSection>
  );
}

export default Qualifications; 