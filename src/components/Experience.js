import React from 'react';
import ProfileSection from './ProfileSection';
import experience from '../data/experience';

/**
 * Experience section.
 */
function Experience() {
  return (
    <ProfileSection title="Experience" className="experience">
      <ul>
        {experience.map((item, idx) => (
          <li key={idx} style={item.image ? { backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '1.5em', borderRadius: '1em', color: '#fff' } : {}}>
            <strong>{item.title}</strong> at {item.company}, {item.location}<br />
            {item.period}
            <ul>
              {item.details.map((detail, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: detail }} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </ProfileSection>
  );
}

export default Experience; 