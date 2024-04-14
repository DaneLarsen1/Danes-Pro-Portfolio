import React from 'react';

function Resume() {
  // List of proficiencies to be displayed
  const proficiencies = [
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Python',
    'Figma',
    'HTML & CSS',
    'Bootstrap',
    'Git & GitHub',
    'Render',
    'MySQL',
    'NoSQL'
  ];

  return (
    <section className="resume-section">
      <div className="resume-container">
        <h2 className="section-title">Resume</h2>
        <a href="../public/Dane_Larsen_Resume.pdf" download="Dane_Larsen_Resume.pdf" className="download-link">
          Download Resume
        </a>
        <h3 className="proficiencies-title">Proficiencies</h3>
        <ul className="proficiencies-list">
          {proficiencies.map((skill, index) => (
            <li key={index} className="proficiency-item">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Resume;