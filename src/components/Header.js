import React from 'react';

/**
 * Header section with name, title, and contact info.
 */
function Header() {
  return (
    <header className="profile-header">
      <img
        src="https://ui-avatars.com/api/?name=Sai+Nishanth+Vaka&background=0D8ABC&color=fff&size=200"
        alt="Sai Nishanth Vaka"
        className="profile-photo"
      />
      <h1>Sai Nishanth Vaka</h1>
      <h2>Senior Software Engineer | Austin, TX</h2>
      <div className="profile-contact-row">
        <a href="mailto:sainishanthvaka373@gmail.com">sainishanthvaka373@gmail.com</a> | <a href="https://linkedin.com/in/sainishanthvaka/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | +1 (623)-273-3630
      </div>
    </header>
  );
}

export default Header; 