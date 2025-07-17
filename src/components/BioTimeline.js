import React from 'react';
import { motion } from 'framer-motion';
import ProfileSection from './ProfileSection';
import bioTimeline from '../data/bioTimeline';

function BioTimeline() {
  return (
    <ProfileSection title="Bio Timeline" className="bio-timeline-section">
      <div className="bio-timeline-outer">
        <motion.div
          className="bio-timeline-track"
          drag="x"
          dragConstraints={{ left: -((bioTimeline.length - 3) * 260), right: 0 }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {bioTimeline.map((item, idx) => (
            <div className="bio-timeline-event" key={idx}>
              <div className="bio-timeline-year">{item.year}</div>
              <div className="bio-timeline-dot" />
              <div className="bio-timeline-desc">{item.event}</div>
              <div className="bio-timeline-location">{item.location}</div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="bio-timeline-hint">Drag the timeline to explore my journey →</div>
    </ProfileSection>
  );
}

export default BioTimeline; 