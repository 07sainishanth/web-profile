import React from 'react';
import ProfileSection from './ProfileSection';
import contact from '../data/contact';
import PropTypes from 'prop-types';

/**
 * Contact section.
 */
function Contact() {
  return (
    <ProfileSection title="Contact" className="contact">
      <ul>
        <li>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
        <li>LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">sainishanthvaka</a></li>
        <li>GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer">sainishanthvaka</a></li>
      </ul>
    </ProfileSection>
  );
}

Contact.propTypes = {};

export default Contact; 