import React from 'react';
import ProfileSection from './ProfileSection';

/**
 * Experience section.
 */
function Experience() {
  return (
    <ProfileSection title="Experience" className="experience">
      <ul>
        <li>
          <strong>Senior Software Engineer</strong> at Intuit (AK Technologies), San Diego, CA<br />
          Aug 2024 - Current
          <ul>
            <li>Reduced operational overhead by parallelising task execution and implementing multi-stage testing, enhancing collaboration and efficiency across cross-functional team dependencies.</li>
            <li>Improved application performance by consolidating multiple downstream calls into a single optimized service call, reducing latency by 200ms per transaction.</li>
            <li>Designed and implemented new APIs to externalize static data and dismantle legacy components, enabling a distributed system fully owned by the team and reducing repetitive development efforts by 20%.</li>
            <li>Currently designing and implementing a decentralized architecture for TurboTax, enhancing scalability and reliability for 100K TPS during peak periods.</li>
            <li><strong>Stack:</strong> Java, Spring Boot, JUnit, Mockito, React, JavaScript, TypeScript, Python, Jenkins</li>
          </ul>
        </li>
        <li>
          <strong>Software Development Engineer</strong> at Amazon Web Services, Austin, TX<br />
          May 2023 - Jun 2024
          <ul>
            <li>Developed the frontend component of private offer creation, enhancing user experience and streamlining the process.</li>
            <li>Orchestrated a comprehensive overhaul of permissions, reducing 403 errors by 23% and improving user transitions.</li>
            <li>Developed end-to-end integration tests for Seller Experience initiative, reducing service downtime by 2%.</li>
            <li>Automated analysis of recurring auto cut tickets, saving 15 developer hours weekly and reducing ticket surge by 9%.</li>
            <li>Developed an Offer Creation API integrated with a Slack bot, accelerating offer delivery by 4 hours and increasing peak-time revenue by $800K monthly.</li>
            <li><strong>Stack:</strong> Java, Spring Boot, JUnit, Mockito, React, JavaScript, TypeScript, Python, AWS Services</li>
          </ul>
        </li>
        <li>
          <strong>Design Engineer</strong> at Privoro, Tempe, AZ<br />
          Aug 2022 - Apr 2023
          <ul>
            <li>Developed a low-cost Automated Test Equipment (ATE) system, validating 80% of backend functional paths and conducting stress tests for communication robustness.</li>
            <li>Migrated an on-premises data warehouse service to cloud infrastructure across numerous regions, with zero downtime and no customer impact.</li>
            <li>Developed robust backend service for equipment configuration and admin protocols, improving system reliability and user operations.</li>
            <li><strong>Stack:</strong> Java, Python, Selenium, Go, AWS Services</li>
          </ul>
        </li>
        <li>
          <strong>Member Technical Staff</strong> at Helium Consulting, Pune, MH<br />
          May 2019 - Feb 2022
          <ul>
            <li>Implemented offset auto-advancement in the data plane, prioritizing live data during high latency in downstream services.</li>
            <li>Designed and deployed IIoT bus, handling data at over 100GB per minute and enabling seamless analysis.</li>
            <li>Developed a cloud-based application for generating custom web UIs and managing various forms of data, reducing time from months to minutes.</li>
            <li>Established the software development life cycle, covering requirement gathering, design, testing, Agile Scrum, and documentation.</li>
            <li><strong>Stack:</strong> Java, Python, AWS, Selenium, C#, PostgreSQL, DynamoDB, Redis, SQLite, Hadoop, node.js, React.js, Kafka, Docker, Kubernetes</li>
          </ul>
        </li>
      </ul>
    </ProfileSection>
  );
}

export default Experience; 