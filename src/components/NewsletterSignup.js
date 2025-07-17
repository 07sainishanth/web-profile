import React, { useState } from 'react';
import ProfileSection from './ProfileSection';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // Replace with your Formspree endpoint
    const res = await fetch('https://formspree.io/f/xayrjvbp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    if (res.ok) {
      setSubmitted(true);
      setEmail('');
    } else {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <ProfileSection title="Newsletter Signup" className="newsletter-signup">
      {submitted ? (
        <div className="newsletter-success">Thank you for subscribing!</div>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email address"
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-btn">Subscribe</button>
        </form>
      )}
      {error && <div className="newsletter-error">{error}</div>}
    </ProfileSection>
  );
}

export default NewsletterSignup; 