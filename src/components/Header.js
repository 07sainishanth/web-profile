import React from 'react';
import PropTypes from 'prop-types';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

/**
 * Animated Hero section with name, typewriter roles, and animated entrance.
 */
function Header({ onToggleDarkMode, darkMode }) {
  return (
    <section className="hero-section">
      {/* Animated techy background */}
      <div className="hero-bg-animated" />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={process.env.PUBLIC_URL + '/profilePic.jpeg'}
          alt="Sai Nishanth Vaka"
          className="profile-photo hero-photo"
        />
        <h1 className="hero-title">Sai Nishanth Vaka</h1>
        <h2 className="hero-typewriter">
          <Typewriter
            words={[
              'Senior Software Engineer',
              'Cloud Platform Specialist',
              'Full Stack Developer',
              'Tech Enthusiast',
              'Open Source Contributor',
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </h2>
        <div className="profile-contact-row">
          <a href="mailto:sainishanthvaka373@gmail.com">sainishanthvaka373@gmail.com</a> |
          <a href="https://linkedin.com/in/sainishanthvaka/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ verticalAlign: 'middle' }} /> LinkedIn</a> |
          <a href="https://github.com/sainishanthvaka" target="_blank" rel="noopener noreferrer"><FaGithub style={{ verticalAlign: 'middle' }} /> GitHub</a> |
          San Diego, CA | +1 (623)-273-3630
        </div>
        <div className="profile-header-actions">
          <a
            href={process.env.PUBLIC_URL + '/SaiNishanthVakaResume.pdf'}
            className="resume-download-btn"
            download
          >
            Download Resume
          </a>
          <button
            className="dark-mode-toggle-btn"
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </motion.div>
    </section>
  );
}

Header.propTypes = {
  onToggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Header; 