import React from 'react';
import ProfileSection from './ProfileSection';
import projects from '../data/projects';
import PropTypes from 'prop-types';

/**
 * Projects section.
 */
function Projects() {
  return (
    <ProfileSection title="Projects" className="projects">
      <ul>
        {projects.map((project, idx) => (
          <li key={idx}>
            <strong>{project.name}</strong> – {project.description}
          </li>
        ))}
      </ul>
    </ProfileSection>
  );
}

Projects.propTypes = {};

export default Projects; 