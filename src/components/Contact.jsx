import React from 'react';
import { Mail, Linkedin, Twitter, ArrowUpRight, Code, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <p className="section-subtitle text-mono scroll-reveal">(. CONTACT )</p>

        <h2 className="contact-title scroll-reveal">
          Let's Build<br />
          <span className="text-muted">Something Cool</span><br />
          Together.
        </h2>

        <div className="contact-divider"></div>

        <div className="contact-grid scroll-reveal">
          <div className="contact-column">
            <h4 className="column-title text-mono">CONNECT</h4>
            <ul className="contact-links">
              <li>
                <a href="mailto:kushanshah169@gmail.com">
                  <Mail size={16} /> kushanshah169@gmail.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/kushan-shah-X" target="_blank" rel="noreferrer">
                  <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} className="arrow-icon" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Kushan-shah" target="_blank" rel="noreferrer">
                  <Github size={16} /> GitHub <ArrowUpRight size={14} className="arrow-icon" />
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-column">
            <h4 className="column-title text-mono">CODING PLATFORMS</h4>
            <ul className="contact-links">
              <li>
                <a href="https://leetcode.com/u/Z8Adx1KT2T/" target="_blank" rel="noreferrer">
                  <Code size={16} /> LeetCode <ArrowUpRight size={14} className="arrow-icon" />
                </a>
              </li>
              <li>
                <a href="https://www.geeksforgeeks.org/profile/businesk21j?tab=activity" target="_blank" rel="noreferrer">
                  <Code size={16} /> GeeksforGeeks <ArrowUpRight size={14} className="arrow-icon" />
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-column">
            <h4 className="column-title text-mono">LOCATION & PHONE</h4>
            <div className="location-info">
              <p>Phagwara, Punjab</p>
              <p className="text-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '15px' }}>
                Mob: +91-8360831496
              </p>
              <div className="availability">
                <span className="status-dot"></span>
                <span className="text-mono">Actively Building</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
