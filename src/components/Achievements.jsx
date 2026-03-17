import React, { useRef, useCallback } from 'react';
import { Trophy, Code, GitBranch, Rocket, BookOpen, Brain, Download } from 'lucide-react';
import './Achievements.css';

const achievementsData = [
  {
    icon: Code,
    title: '220+ Problems Solved',
    description: 'Solved 220+ coding problems on HackerRank and LeetCode, building consistency in problem-solving and programming fundamentals.',
    tags: ['LeetCode', 'HackerRank'],
    color: '#f59e0b',
    stat: '220+'
  },
  {
    icon: Trophy,
    title: 'HackerRank Skill Track',
    description: 'Completed HackerRank Intermediate Programming skill tracks, reinforcing core concepts such as loops, conditionals, functions, and data structures.',
    tags: ['Intermediate', 'Problem Solving'],
    color: '#10b981',
    stat: 'Intermediate'
  },
  {
    icon: Rocket,
    title: 'End-to-End Deployment',
    description: 'Built and deployed academic and self-initiated projects using Python, applying end-to-end development from implementation to deployment.',
    tags: ['Python', 'Deployment'],
    color: '#3b82f6',
    stat: 'Inference Pipeline'
  }
];

const extracurricularData = [
  {
    icon: Brain,
    text: 'Practiced coding regularly outside coursework to improve logic and coding speed.'
  },
  {
    icon: BookOpen,
    text: 'Explored software development and machine learning topics through structured self-learning and hands-on practice.'
  },
  {
    icon: GitBranch,
    text: 'Maintained active GitHub profile with consistent contributions across personal and academic projects.'
  }
];

const AchievementCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const statRef = useRef(null);
  const contentRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set variables for CSS radial gradients
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // 3D physical tilt tracking calculations
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12; 
    const rotateY = ((x - centerX) / centerX) * 12;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    // Extreme Z-space depth parallax
    const offsetX = (x - centerX) / centerX;
    const offsetY = (y - centerY) / centerY;
    
    if (iconRef.current) {
      iconRef.current.style.transform = `translateZ(60px) translate(${offsetX * 10}px, ${offsetY * 10}px) scale(1.05) rotate(5deg)`;
    }
    if (statRef.current) {
      statRef.current.style.transform = `translateZ(40px) translate(${offsetX * -15}px, ${offsetY * -15}px)`;
    }
    if (contentRef.current) {
      contentRef.current.style.transform = `translateZ(30px)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    if (iconRef.current) iconRef.current.style.transform = 'translateZ(0px) translate(0px, 0px) scale(1) rotate(0deg)';
    if (statRef.current) statRef.current.style.transform = 'translateZ(0px) translate(0px, 0px)';
    if (contentRef.current) contentRef.current.style.transform = 'translateZ(0px)';
  }, []);

  return (
    <div
      ref={cardRef}
      className="achievement-card scroll-reveal"
      style={{ '--card-accent': item.color, '--i': index }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 2030 Mouse Flare & Perspective Grid */}
      <div className="ach-flare"></div>
      <div className="ach-grid-bg"></div>

      <div className="ach-stat text-mono" ref={statRef}>{item.stat}</div>
      <div className="ach-icon-wrapper" ref={iconRef}>
        <item.icon size={24} />
      </div>
      
      {/* Container floating off the card logic */}
      <div className="ach-content-wrapper" ref={contentRef}>
        <h3 className="ach-title">{item.title}</h3>
        <p className="ach-description">{item.description}</p>
        <div className="ach-tags">
          {item.tags.map(tag => (
            <span key={tag} className="ach-tag text-mono">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        
        {/* Section Header */}
        <div className="section-header scroll-reveal">
          <p className="section-subtitle text-mono">05 // MILESTONES</p>
          <h2 className="section-title">ACHIEVEMENTS</h2>
          <div className="title-underline"></div>
        </div>

        {/* Achievement Cards */}
        <div className="achievements-grid">
          {achievementsData.map((item, index) => (
            <AchievementCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Extracurricular */}
        <div className="extra-section scroll-reveal">
          <h3 className="extra-heading text-mono">
            <span className="extra-line"></span>
            Extracurricular
            <span className="extra-line"></span>
          </h3>
          <div className="extra-grid">
            {extracurricularData.map((item, index) => (
              <div key={index} className="extra-item scroll-reveal" style={{ '--i': index }}>
                <div className="extra-icon">
                  <item.icon size={18} />
                </div>
                <p className="extra-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download CV */}
        <div className="cv-download-section scroll-reveal">
          <div className="cv-card">
            <div className="cv-card-bg"></div>
            <div className="cv-aurora-bg"></div>
            <div className="cv-content">
              <div className="cv-text">
                <h3 className="cv-heading">Want the full picture?</h3>
                <p className="cv-subtext text-mono">Download my resume for a complete overview of my skills, experience, and projects.</p>
              </div>
              <a 
                href="/images/CV.pdf" 
                download="Kushan_Shah_CV.pdf" 
                className="cv-download-btn"
              >
                <Download size={20} />
                <span>Download CV</span>
                <div className="btn-shimmer"></div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
