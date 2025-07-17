import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable section wrapper for profile sections.
 * @param {string} title - The section title.
 * @param {React.ReactNode} children - The section content.
 */
function ProfileSection({ title, children, className = '' }) {
  return (
    <section className={`profile-section ${className}`.trim()}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}

ProfileSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ProfileSection;
