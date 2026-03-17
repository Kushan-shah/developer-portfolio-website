import React, { useEffect, useRef, useState } from 'react';
import { Target, Code, Brain, Zap } from 'lucide-react';
import './Stats.css';

const statsData = [
  { id: 1, label: 'PROBLEMS SOLVED', value: 220, suffix: '+', icon: Target },
  { id: 2, label: 'ML MODELS BUILT', value: 7, suffix: '', icon: Brain },
  { id: 3, label: 'PROJECTS COMPLETED', value: 11, suffix: '+', icon: Code },
  { id: 4, label: 'YEARS CODING', value: 6, suffix: '+', icon: Zap },
];

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isIntersecting];
};

const AnimatedNumber = ({ value, duration, isReady }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isReady) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value, duration, isReady]);

  return <span>{count}</span>;
}

const Stats = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

  return (
    <section id="stats" className="stats-section" ref={ref}>
      <div className="stats-container">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.id} 
              className={`stat-card ${isVisible ? 'revealed' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="stat-icon-wrapper">
                <Icon className="stat-icon" />
              </div>
              <h3 className="stat-number text-mono">
                <AnimatedNumber value={stat.value} duration={2000} isReady={isVisible} />
                <span className="stat-suffix">{stat.suffix}</span>
              </h3>
              <p className="stat-label text-mono">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
