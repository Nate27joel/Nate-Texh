import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Github, Linkedin, Mail, Cpu, Globe, Layout, Shield, 
  MessageSquare, X, ChevronRight, Atom, Code2, 
  Server, Zap, Wind, Database, Activity, Layers, Menu, 
  Container, Cloud, Smartphone, Sun, Moon, 
  CheckCheck,
  Facebook,
  Instagram,
  CircleCheckBigIcon, MessageCircle,
  Skull,
  Code,
  Laptop2Icon,
  LaptopMinimalCheck,
  UserPlus2Icon,
  User,
  UserCheck2,
  XLineTop,
  LineChart,
} from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './App.css';

const BackgroundWaves = () => (
   <svg className="bg-waves" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="white" stroke-width="0.5" d="M0,400 Q360,100 720,400 T1440,400" opacity="0.2">
      <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,400 Q360,100 720,400 T1440,400; M0,400 Q360,700 720,400 T1440,400; M0,400 Q360,100 720,400 T1440,400" />
    </path> 
    <path fill="none" stroke="white" stroke-width="0.5" d="M0,450 Q360,150 720,450 T1440,450" opacity="0.1" />
  </svg>
);

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">Nat3</div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>{link.name}</a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
        <div className="mobile-nav-toggle" style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={toggleTheme} className="theme-toggle" style={{ border: 'none', opacity: 0.6 }}><Sun size={20} /></button>
          <button onClick={() => setIsOpen(true)} className="theme-toggle" style={{ border: 'none', opacity: 0.6 }}><Menu size={24} /></button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="mobile-overlay" 
            style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'var(--bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'var(--text)' }}><X size={32} /></button>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} style={{ fontSize: '3rem', margin: '1rem', textDecoration: 'none', color: 'var(--text)', textTransform: 'uppercase', fontFamily: 'var(--font-serif)' }}>{link.name}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const roles = ['WEB DEVELOPER', 'UI ENGINEER', 'SYSTEM ARCHITECT', 'AI SPECIALIST', 'DEBUGGER'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length === currentRole.length) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="hero">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} style={{ flex: 1 }}>
        <div className="hero-tag">Engineering Portfolio 2025/2026</div>
        <h1>Nathan <br /> <span className="text-stroke">Texh</span></h1>
        <div className="typing-container">
          {text}<span className="cursor"></span>
        </div>
        <div className="btn-group">
          <a href="#work" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact</a>
        </div>
      </motion.div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <div class="visual-container">
      <div class="wireframe-sphere"></div>
    </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about">
      <div className="about-container autoShow">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: '-apple-system' }}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Behind the Code</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            I am Nathan, a systems architect and full-stack developer dedicated to crafting digital experiences that are as robust as they are beautiful.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
            With a background in computer engineering and a passion for AI integration, I build scalable infrastructures and high-performance user interfaces. My mission is to translate complex technical requirements into seamless, efficient solutions that push the boundaries of what's possible on the web.
          </p>
        </div>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="about-image-wrapper imageReveal"
        >
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', background: 'var(--card-bg)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <UserCheck2 size={160} className="pulse-effect" style={{ opacity: 0.1 }} />
             <div style={{ position: 'absolute', bottom: '2rem', left: '2rem' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '2px', opacity: 0.5, marginBottom: '0.5rem' }}>CURRENTLY BASED IN</div>
                <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>GLOBAL / REMOTE</div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    { id: '01', title: 'Neural Engine', desc: 'Enterprise data integration with custom LLM architecture.', link: '#' },
    { id: '02', title: 'SaaS Platform', desc: 'High-performance dashboard for real-time logistics tracking.', link: '#' },
    { id: '03', title: 'Cyber Shield', desc: 'Threat detection system utilizing behavioral analysis.', link: '#' },
    { id: '04', title: 'Fintech App', desc: 'Secure, low-latency currency exchange microservices.', link: '#' },
    { id: '05', title: 'E-Comm UI', desc: 'Award-winning minimalist shopping experience.', link: '#' },
    { id: '06', title: 'Cloud Core', desc: 'Automated CI/CD infrastructure for scalable nodes.', link: '#' },
    { id: '07', title: 'Weather App', desc: 'Hyper-local forecasting engine with real-time satellite data visualization.', link: '#' },
    { id: '08', title: 'Crypto Pulse', desc: 'DeFi dashboard featuring real-time token analytics and whale movement tracking.', link: '#' },
    { id: '09', title: 'Health Sync', desc: 'HIPAA-compliant patient portal with end-to-end encrypted record management.', link: '#' }
  ];

  return (
    <section id="work">
      <h2 className="section-title">Latest Work <CircleCheckBigIcon /> </h2>
      <div className="work-grid autoShow">
        {projects.map((p) => (
          <motion.a href={p.link} target="_blank" rel="noopener noreferrer" key={p.id} whileHover={{ y: -10 }} className="work-card imageReveal" style={{ textDecoration: 'none', color: 'inherit', display: 'block', position: 'relative' }}>
            <div className="work-id">{p.id}</div>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>{p.title}</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
            <ChevronRight style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem' }} />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  const list = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js/Go', level: 85 },
    { name: 'System Architecture', level: 88 },
    { name: 'PostgreSQL/Redis', level: 82 },
    { name: 'Html/Css', level: 98 },
  ];

  return (
    <section id="skills" className='fadeUp'>
      <h2 className="section-title">Expertise</h2>
      <div className="skills-grid">
        {list.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar-bg">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1.5 }} className="skill-bar-fill" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.className = saved;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <main>
      <BackgroundWaves />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Work />
      <Skills />
      <section id="contact" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Get in Touch</h2>
        <p style={{ color: 'var(--muted)', letterSpacing: '2px', marginBottom: '3rem' }}>NATEAZIKE27@GMAIL.COM</p>
        <form action="https://formspree.io/f/xojyloev" method="POST" style={{ maxWidth: '600px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
          <input name="name" placeholder="Full Name" required style={{ padding: '1.25rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)' }} />
          <input name="email" type="email" placeholder="Email" required style={{ padding: '1.25rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)' }} />
          <textarea name="message" placeholder="Message" style={{ padding: '1.25rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)', minHeight: '150px' }} />
          <button type="submit" className="btn btn-primary" style={{ padding: '1.25rem' }}>Send Transmission</button>
        </form>
      </section>
      <footer style={{ padding: '2rem 10%', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', opacity: 0.4, fontSize: '0.6rem', letterSpacing: '1px' }}>
        <span>© 2026 Nate-Texh Company</span>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://github.com/Nate27joel" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><Github size={25} /></a>
         <a href="https://wa.me/+2349164848149" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><MessageCircle size={25}/></a>
        </div>
      </footer>
    </main>
  );
}