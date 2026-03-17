import React, { useState, useEffect, useCallback } from 'react';
import { Award, Activity, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import './Certifications.css';

const certificationsData = [
  {
    image: '/images/cert_ai.png',
    badge: 'CERTIFICATION',
    title: 'Artificial Intelligence Primer',
    issuer: 'Infosys Springboard • Dec 2025',
    color: '#3b82f6'
  },
  {
    image: '/images/cert_dl.png',
    badge: 'CERTIFICATION',
    title: 'Deep Learning for Developers',
    issuer: 'Infosys Springboard • Dec 2025',
    color: '#8b5cf6'
  },
  {
    image: '/images/cert_python.png',
    badge: 'CERTIFICATION',
    title: 'Programming for Everybody',
    issuer: 'Coursera (UMich) • Nov 2025',
    color: '#10b981'
  },
  {
    image: '/images/cert_nptel.png',
    badge: 'CERTIFICATION',
    title: 'Cloud Computing',
    issuer: 'NPTEL (IIT Kharagpur) • Apr 2025',
    color: '#ef4444'
  },
  {
    image: '/images/cert_google_ai.png',
    badge: 'CERTIFICATION',
    title: 'Introduction to AI',
    issuer: 'Google (Coursera) • Nov 2025',
    color: '#f59e0b'
  }
];

const CYCLE_MS = 4000;

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // cycleKey forces React to remount the progress bar, restarting CSS animation
  const [cycleKey, setCycleKey] = useState(0);

  const goTo = useCallback((idx) => {
    setActiveIndex(idx);
    setCycleKey(k => k + 1); // reset progress bar
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex(prev => {
      const next = (prev + 1) % certificationsData.length;
      return next;
    });
    setCycleKey(k => k + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex(prev => {
      const next = (prev - 1 + certificationsData.length) % certificationsData.length;
      return next;
    });
    setCycleKey(k => k + 1);
  }, []);

  // Auto-cycle  
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, CYCLE_MS);
    return () => clearInterval(timer);
  }, [isPaused, handleNext, activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const currentColor = certificationsData[activeIndex].color;

  return (
    <section id="certifications" className="certifications-section">
      <div className="cert-container">
        <div className="section-header scroll-reveal" style={{ marginBottom: '60px' }}>
          <p className="section-subtitle text-mono">04 // CREDENTIALS</p>
          <h2 className="section-title">CERTIFICATIONS</h2>
          <div className="title-underline"></div>
        </div>

        <div 
          className="cert-3d-wrapper scroll-reveal"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ '--active-color': currentColor }}
        >
          <div className="carousel-ambient-glow" style={{ background: `radial-gradient(ellipse at center, ${currentColor}20 0%, transparent 70%)` }}></div>

          <div className="carousel-header">
            <div className="carousel-counter">
              <span className="counter-current text-mono" style={{ color: currentColor }}>{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="counter-sep">/</span>
              <span className="counter-total text-mono">{String(certificationsData.length).padStart(2, '0')}</span>
            </div>
            <div className="cert-active-label">
              <h3 className="cert-active-title" style={{ color: currentColor }}>{certificationsData[activeIndex].title}</h3>
              <p className="cert-active-issuer text-muted">{certificationsData[activeIndex].issuer}</p>
            </div>
            <div className="carousel-controls">
              <button className="nav-btn" onClick={handlePrev} aria-label="Previous"><ChevronLeft size={22} /></button>
              <button className="nav-btn" onClick={handleNext} aria-label="Next"><ChevronRight size={22} /></button>
            </div>
          </div>

          <div className="carousel-container">
            {certificationsData.map((cert, index) => {
              let diff = index - activeIndex;
              const total = certificationsData.length;
              if (diff > Math.floor(total / 2)) diff -= total;
              if (diff < -Math.floor(total / 2)) diff += total;

              let positionClass = '';
              if (diff === 0) positionClass = 'active-card';
              else if (diff === -1) positionClass = 'prev-1';
              else if (diff === 1) positionClass = 'next-1';
              else if (diff <= -2) positionClass = 'prev-2';
              else if (diff >= 2) positionClass = 'next-2';

              return (
                <div 
                  key={index} 
                  className={`carousel-card ${positionClass}`}
                  onClick={() => goTo(index)}
                >
                  <div className="cert-image-container">
                    <img src={cert.image} alt={cert.title} draggable="false" />
                    <div className="cert-overlay-glare"></div>
                  </div>
                  <div className="cert-card-content">
                    <span className="cert-badge text-mono" style={{ color: cert.color, borderColor: `${cert.color}50`, background: `${cert.color}15` }}>{cert.badge}</span>
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    
                    {diff === 0 && (
                      <a href={cert.image} target="_blank" rel="noreferrer" className="verify-btn text-mono" draggable="false" onClick={(e) => e.stopPropagation()} style={{ borderColor: cert.color, color: cert.color }}>
                        VIEW CREDENTIAL <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Key-based progress bar forces remount = animation restart */}
          <div className="carousel-progress-bar" key={`progress-${cycleKey}`}>
            {certificationsData.map((cert, i) => (
              <div 
                key={i} 
                className={`progress-segment ${i === activeIndex ? 'active' : ''}`}
                onClick={() => goTo(i)}
                style={i === activeIndex ? { '--seg-color': cert.color, '--cycle-time': `${CYCLE_MS}ms` } : {}}
              >
                <div className="progress-fill"></div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Certifications;
