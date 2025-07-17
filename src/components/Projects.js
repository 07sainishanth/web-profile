import React from 'react';
import ProfileSection from './ProfileSection';
import projects from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

/**
 * Projects section with interactive cards.
 */
function Projects() {
  return (
    <ProfileSection title="Projects" className="projects">
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div
            className="project-card"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.name} className="project-image" />
            </div>
            <div className="project-content">
              <h4 className="project-title">{project.name}</h4>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span className="project-tech-badge" key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FaGithub />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </ProfileSection>
  );
}

export default Projects; 