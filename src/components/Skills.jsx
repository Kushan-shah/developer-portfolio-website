import React from 'react';
import './Skills.css';

const Skills = () => {
  const row1 = ['Python', 'C++', 'Java', 'SQL', 'C'];
  const row2 = ['TensorFlow', 'Scikit-Learn', 'Keras', 'Pandas', 'NumPy'];
  const row3 = ['Data Structure & Algorithm', 'OOP', 'DBMS', 'OS'];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header scroll-reveal">
        <p className="section-subtitle text-mono">01 // SKILLS</p>
        <h2 className="section-title">CAPABILITIES</h2>
        <div className="title-underline"></div>
      </div>

      <div className="marquee-container scroll-reveal">
        <div className="marquee-row right">
          <div className="marquee-content">
            {[...row1, ...row1, ...row1, ...row1, ...row1].map((skill, index) => (
              <span key={`r1-a-${index}`} className="marquee-item">{skill}</span>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {[...row1, ...row1, ...row1, ...row1, ...row1].map((skill, index) => (
              <span key={`r1-b-${index}`} className="marquee-item">{skill}</span>
            ))}
          </div>
        </div>

        <div className="marquee-row left">
          <div className="marquee-content">
            {[...row2, ...row2, ...row2, ...row2, ...row2].map((skill, index) => (
              <span key={`r2-a-${index}`} className="marquee-item">{skill}</span>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {[...row2, ...row2, ...row2, ...row2, ...row2].map((skill, index) => (
              <span key={`r2-b-${index}`} className="marquee-item">{skill}</span>
            ))}
          </div>
        </div>

        <div className="marquee-row right">
          <div className="marquee-content">
            {[...row3, ...row3, ...row3, ...row3, ...row3].map((skill, index) => (
              <span key={`r3-a-${index}`} className="marquee-item">{skill}</span>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {[...row3, ...row3, ...row3, ...row3, ...row3].map((skill, index) => (
              <span key={`r3-b-${index}`} className="marquee-item">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
