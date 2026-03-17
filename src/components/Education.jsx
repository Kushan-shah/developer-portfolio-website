import React from 'react';
import { Award, BookOpen, FileText, Activity } from 'lucide-react';
import './Education.css';

const educationData = [
  {
    image: '/images/lpu.jpg', 
    timeRange: 'Aug 2023 - Present',
    title: 'Lovely Professional University',
    subtitle: 'B.Tech - Computer Science and Engineering',
    details: 'CGPA: 8.25 | Phagwara, Punjab'
  },
  {
    image: '/images/dashmesh.jpg',
    timeRange: 'Apr 2020 - May 2022',
    title: 'Sri Dasmesh Academy',
    subtitle: 'Intermediate',
    details: 'Percentage: 81.4% | Anandpur Sahib, Punjab'
  },
  {
    image: '/images/mount_carmel.jpg',
    timeRange: 'Apr 2007 - Mar 2020',
    title: 'Mount Carmel School Jindwari',
    subtitle: 'Matriculation',
    details: 'Percentage: 89.6% | Rupnagar, Punjab'
  }
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="section-header scroll-reveal">
        <p className="section-subtitle text-mono">03 // BACKGROUND</p>
        <h2 className="section-title">EDUCATION</h2>
        <div className="title-underline"></div>
      </div>

      {/* --- FORMAL EDUCATION TIMELINE --- */}
      <div className="education-timeline-container">
        <div className="column-header timeline-main-header">
          <BookOpen className="header-icon" />
          <h3 className="text-mono" style={{fontSize: '1.5rem', letterSpacing: '0.2em'}}>FORMAL EDUCATION</h3>
        </div>
        
        <div className="alternating-timeline">
          <div className="timeline-center-line"></div>
          
          {educationData.map((edu, index) => (
            <div key={index} className={`timeline-block ${index % 2 === 0 ? 'left' : 'right'} scroll-reveal`}>
              <div className="timeline-node"></div>
              
              <div className="timeline-content-card">
                <div className="edu-image-wrapper">
                  <img src={edu.image} alt={edu.title} loading="lazy" />
                  <div className="edu-image-gradient"></div>
                </div>
                
                <div className="edu-text-wrapper">
                  <p className="time-range text-mono text-accent">{edu.timeRange}</p>
                  <h4 className="item-title">{edu.title}</h4>
                  <p className="item-subtitle">{edu.subtitle}</p>
                  <p className="item-details text-muted">{edu.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Education;
