import React from 'react';
import ProfileSection from './ProfileSection';

/**
 * Education section.
 */
function Education() {
  return (
    <ProfileSection title="Education" className="education">
      <ul>
        <li>
          <strong>Arizona State University</strong>, Tempe, AZ<br />
          Master of Science in Computer Software Engineering<br />
          Aug 2021 - May 2023<br />
          <em>Coursework:</em> Software Requirement and Specifications, Software Design, Web Semantics, Data Visualization
        </li>
        <li>
          <strong>Indian Institute of Technology, Palakkad</strong>, India<br />
          Bachelor of Technology in Computer Science and Engineering<br />
          Aug 2015 - May 2019<br />
          <em>Coursework:</em> Algorithm and Data Structure, Object-Oriented Programming, Database Management Systems, Computer Networking
        </li>
      </ul>
    </ProfileSection>
  );
}

export default Education; 