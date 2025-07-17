import React from 'react';
import PropTypes from 'prop-types';

/**
 * Header section with name, title, and contact info.
 * @param {function} onToggleDarkMode - Handler for dark mode toggle.
 * @param {boolean} darkMode - Whether dark mode is active.
 */
function Header({ onToggleDarkMode, darkMode }) {
  return (
    <header className="profile-header">
      <img
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
        alt="Tech Banner"
        className="profile-banner"
        style={{ width: '100%', maxHeight: 180, objectFit: 'cover', borderRadius: '12px', marginBottom: '1rem' }}
      />
      <img
        src={process.env.PUBLIC_URL + '/profilePic.jpeg'}
        alt="Sai Nishanth Vaka"
        className="profile-photo"
      />
      <h1>Sai Nishanth Vaka</h1>
      <h2>Senior Software Engineer | San Diego, CA</h2>
      <div className="profile-contact-row">
        <a href="mailto:sainishanthvaka373@gmail.com">sainishanthvaka373@gmail.com</a> | <a href="https://linkedin.com/in/sainishanthvaka/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | +1 (623)-273-3630
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
    </header>
  );
}

Header.propTypes = {
  onToggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Header; 