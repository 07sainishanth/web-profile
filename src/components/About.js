import React from 'react';
import ProfileSection from './ProfileSection';
import about from '../data/about';

/**
 * Professional summary section.
 */
function About() {
  return (
    <ProfileSection title="Professional Summary" className="about">
      <p>{about.summary}</p>
    </ProfileSection>
  );
}

export default About; 