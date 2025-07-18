const projects = [
  // Example project with image
  {
    name: 'Sample Project',
    description: 'A sample project using a techy photo.',
    image: process.env.PUBLIC_URL + '/photos/rauno3.jpg',
    tech: ['React', 'Node.js'],
    github: '',
    demo: '',
  },
  {
    name: 'Smart Attendance System',
    description: 'Built a facial recognition-based attendance system using Python and OpenCV.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    tech: ['Python', 'OpenCV', 'Flask'],
    github: 'https://github.com/sainishanthvaka/smart-attendance',
    demo: ''
  },
  {
    name: 'Personal Portfolio Website',
    description: 'Designed and developed a personal website using React and hosted on GitHub Pages.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'CSS', 'GitHub Pages'],
    github: 'https://github.com/07sainishanth/web-profile',
    demo: 'https://07sainishanth.github.io/web-profile/'
  },
  {
    name: 'Chat Application',
    description: 'Real-time chat app using Node.js, Express, and Socket.io.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    tech: ['Node.js', 'Express', 'Socket.io'],
    github: 'https://github.com/sainishanthvaka/chat-app',
    demo: ''
  }
];

export default projects;
