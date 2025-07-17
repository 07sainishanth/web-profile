import React from 'react';
import experience from '../data/experience';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ProfileSection from './ProfileSection';

const iconMap = {
  work: <FaBriefcase className="timeline-icon work" />,
  edu: <FaGraduationCap className="timeline-icon edu" />,
};

function ExperienceTimeline() {
  return (
    <ProfileSection title="Experience & Education" className="experience-timeline">
      <div className="timeline">
        {experience.map((item, idx) => (
          <motion.div
            className="timeline-item"
            key={idx}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="timeline-marker">{iconMap[item.icon]}</div>
            <div className="timeline-content">
              <div className="timeline-header">
                <span className="timeline-title">{item.title}</span>
                <span className="timeline-org">@ {item.org}</span>
              </div>
              <div className="timeline-meta">
                <span className="timeline-location">{item.location}</span>
                <span className="timeline-date">{item.date}</span>
              </div>
              <ul className="timeline-desc">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </ProfileSection>
  );
}

export default ExperienceTimeline; 