import React, { useCallback, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Code, Brain, Zap, CheckCircle, ExternalLink, Clock } from 'lucide-react';
import './Training.css';

const Training = () => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Magnetic displacement — repels from cursor
    const displaceX = ((x - centerX) / centerX) * -6;
    const displaceY = ((y - centerY) / centerY) * -4;

    card.style.transform = `translate(${displaceX}px, ${displaceY}px)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'translate(0, 0)';
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  }, []);

  const skills = ['Python', 'Machine Learning', 'Data Preprocessing', 'Neural Networks', 'Model Evaluation', 'AI Project Dev'];
  
  const highlights = [
    { icon: Code, text: 'Hands-on Python programming with real datasets' },
    { icon: Brain, text: 'ML algorithms: Regression, Classification, Clustering' },
    { icon: Zap, text: 'Neural network fundamentals and deep learning intro' },
    { icon: BookOpen, text: 'End-to-end AI project development and deployment' }
  ];

  return (
    <section id="training" className="training-section">
      <div className="training-container">
        <div className="section-header scroll-reveal" style={{ marginBottom: '60px' }}>
          <p className="section-subtitle text-mono">02.5 // EXPERIENCE</p>
          <h2 className="section-title">INDUSTRIAL TRAINING</h2>
          <div className="title-underline"></div>
        </div>

        <div className="training-main-card scroll-reveal"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Internal Glowing Light Scope */}
          <div className="card-glow-effect"></div>

          {/* Ambient glow */}
          <div className="training-ambient"></div>

          {/* Top ribbon */}
          <div className="training-ribbon">
            <div className="ribbon-left">
              <GraduationCap size={20} />
              <span className="ribbon-badge text-mono">CORE TRAINING PROGRAM</span>
            </div>
            <div className="ribbon-right">
              <span className="ribbon-status text-mono"><CheckCircle size={14} /> COMPLETED</span>
            </div>
          </div>

          {/* Main content split */}
          <div className="training-body">
            {/* Left: Image + Meta */}
            <div className="training-left">
              <div className="training-image-wrap">
                <img src="/images/cert_cse.png" alt="CSE Pathshala Training" />
                <div className="image-shine"></div>
              </div>
              <div className="training-meta-stack">
                <div className="meta-item">
                  <Calendar size={15} />
                  <span className="text-mono">JUN 2025 — AUG 2025</span>
                </div>
                <div className="meta-item">
                  <MapPin size={15} />
                  <span className="text-mono">CSE PATHSHALA</span>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="training-right">
              <h3 className="training-title">Advanced Python for ML & AI</h3>
              <p className="training-desc">
                Intensive hands-on training program covering Python fundamentals through advanced ML concepts. 
                Built real-world AI projects, trained predictive models on industry datasets, and gained 
                practical experience with the complete machine learning pipeline from data collection to deployment.
              </p>

              {/* Highlights grid */}
              <div className="highlights-grid">
                {highlights.map((item, i) => (
                  <div key={i} className="highlight-item">
                    <div className="highlight-icon">
                      <item.icon size={18} />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="training-skill-row">
                {skills.map(skill => (
                  <span key={skill} className="t-skill-chip text-mono">{skill}</span>
                ))}
              </div>

              {/* Duration bar + Certificate link */}
              <div className="training-footer">
                <div className="duration-bar-wrap">
                  <div className="duration-label text-mono">
                    <Clock size={13} />
                    <span>2 MONTHS INTENSIVE</span>
                  </div>
                  <div className="duration-bar">
                    <div className="duration-fill"></div>
                  </div>
                </div>
                <a href="/images/cert_cse.png" target="_blank" rel="noreferrer" className="view-cert-btn text-mono">
                  VIEW CERTIFICATE <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
