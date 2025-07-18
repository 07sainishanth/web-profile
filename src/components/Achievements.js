import React from 'react';
import ProfileSection from './ProfileSection';
import achievements from '../data/achievements';

/**
 * Achievements section.
 */
function Achievements() {
  const renderAchievement = (achievement) => {
    // Check if the achievement contains a URL
    const urlMatch = achievement.match(/\((https?:\/\/[^\s)]+)\)/);
    if (urlMatch) {
      const url = urlMatch[1];
      const text = achievement.replace(/\(https?:\/\/[^\s)]+\)/, '').trim();
      return (
        <>
          {text} (<a href={url} target="_blank" rel="noopener noreferrer">link</a>)
        </>
      );
    }
    return achievement;
  };

  return (
    <ProfileSection title="Achievements" className="achievements">
      <ul>
        {achievements.map((achievement, idx) => (
          <li key={idx}>
            {renderAchievement(achievement)}
          </li>
        ))}
      </ul>
    </ProfileSection>
  );
}

export default Achievements; 