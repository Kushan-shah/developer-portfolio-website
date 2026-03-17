import React, { useCallback, useRef } from 'react';
import { ArrowUpRight, ExternalLink, Globe } from 'lucide-react';
import './Projects.css';

const projectData = [
  {
    id: '01',
    category: 'MACHINE LEARNING',
    title: 'Real Estate Price Prediction',
    description: 'A regression-based price prediction system trained on 10+ real-estate features. Compared 3 regression models and deployed via interactive Streamlit App.',
    tags: ['Python', 'Regression Modeling', 'Matplotlib', 'Scikit-learn', 'Streamlit'],
    bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    sourceUrl: 'https://github.com/Kushan-shah',
    demoUrl: 'https://houseprice-4dky.onrender.com/'
  },
  {
    id: '02',
    category: 'MACHINE LEARNING CLASSIFICATION',
    title: 'Student Dropout Prediction',
    description: 'An ML classification model handling class imbalance to predict student dropout. Improved F1-score to ~82% via SMOTE, hyperparameter tuning, and cross-validation.',
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Logistic Regression', 'Random Forest', 'SMOTE', 'Streamlit'],
    bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    sourceUrl: 'https://github.com/Kushan-shah',
    demoUrl: 'https://studentdropout-tdce.onrender.com/'
  }
];

const Projects = () => {
  const cardRefs = useRef([]);

  // Magnetic hover displacement — card subtly repels from cursor
  const handleMouseMove = useCallback((e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Magnetic displacement (card moves AWAY from cursor — premium feel)
    const displaceX = ((x - centerX) / centerX) * -8;
    const displaceY = ((y - centerY) / centerY) * -6;

    card.style.transform = `translate(${displaceX}px, ${displaceY}px)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const handleMouseLeave = useCallback((index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = 'translate(0, 0)';
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-layout">
        
        <div className="projects-header">
          <div className="sticky-header scroll-reveal">
            <p className="section-subtitle text-mono">02 // WORK</p>
            <h2 className="section-title">PROJECTS</h2>
            <div className="title-underline"></div>
          </div>
        </div>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card scroll-reveal"
              ref={el => cardRefs.current[index] = el}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Cursor-tracking light scope */}
              <div className="card-glow-effect"></div>
              {/* Noise grain overlay */}
              <div className="noise-grain"></div>

              <div 
                className="project-bg" 
                style={{ backgroundImage: `url(${project.bgImage})` }}
              ></div>
              <div className="project-overlay"></div>
              
              <div className="project-content">
                <div className="project-top-row">
                  <div className="project-number text-mono">{project.id}</div>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="live-badge text-mono">
                      <span className="live-dot"></span>
                      LIVE
                      <Globe size={12} />
                    </a>
                  )}
                </div>
                
                <div className="project-info">
                  <p className="project-category text-mono text-accent">{project.category}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tag} 
                        className="tag text-mono"
                        style={{ transitionDelay: `${tagIdx * 40}ms` }}
                      >{tag}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.sourceUrl && (
                      <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="project-link-btn source-btn text-mono">
                        <span>GITHUB</span>
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-link-btn demo-btn text-mono">
                        <span>LIVE</span>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
