// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Warehouse Management System</h3>
        <p><strong>Technologies:</strong> HTML, CSS, JavaScript, Node.js, MongoDB</p>
        <p>Developed a Warehouse Management System for real-time inventory tracking and sales analysis.</p>
        <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
      <div className="project-item">
        <h3>Fitness - Campus Health and Wellness Platform</h3>
        <p><strong>Technologies:</strong> JavaScript, Tailwind CSS, Firebase</p>
        <p>Developed a platform to help students monitor mental and physical health.</p>
        <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  );
};

export default Projects;
