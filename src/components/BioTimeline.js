import React from 'react';
import { motion } from 'framer-motion';
import ProfileSection from './ProfileSection';

const bioEvents = [
  { year: 1998, event: 'Born in Telangana, India', location: 'Telangana, India' },
  { year: 2008, event: 'Started Middle School (AP)', location: 'Andhra Pradesh, India' },
  { year: 2013, event: 'Started High School', location: 'Telangana, India' },
  { year: 2015, event: 'Started BTech at IIT Palakkad', location: 'Palakkad, India' },
  { year: 2019, event: 'Graduated from IIT Palakkad', location: 'Palakkad, India' },
  { year: 2019, event: 'Joined Helium Consulting', location: 'Pune, India' },
  { year: 2021, event: 'Started MS at Arizona State University', location: 'Tempe, AZ, USA' },
  { year: 2022, event: 'Design Engineer at Privoro', location: 'Tempe, AZ, USA' },
  { year: 2023, event: 'Software Development Engineer at AWS', location: 'Austin, TX, USA' },
  { year: 2024, event: 'Senior Software Engineer at Intuit', location: 'San Diego, CA, USA' }
];

function BioTimeline() {
  return (
    <ProfileSection title="Bio Timeline" className="bio-timeline-section">
      <div className="bio-timeline-outer">
        <motion.div
          className="bio-timeline-track"
          drag="x"
          dragConstraints={{ left: -((bioEvents.length - 3) * 260), right: 0 }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {bioEvents.map((item, idx) => (
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