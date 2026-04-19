import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Github, Linkedin, Mail, Cpu, Globe, Layout, Shield, 
  MessageSquare, X, ChevronRight, Atom, Code2, 
  Server, Zap, Wind, Database, Activity, Layers, Menu, 
  Container, Cloud, Smartphone, Sun, Moon, 
  CheckCheck
} from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './App.css';

const BackgroundWaves = () => (
   <svg class="bg-waves" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
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
  const roles = ['WEB DEVELOPER', 'UI ENGINEER', 'SYSTEM ARCHITECT', 'AI SPECIALIST'];
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
        <h1>Nathan <br /> <span className="text-stroke">Company</span></h1>
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

const Work = () => {
  const projects = [
    { id: '01', title: 'Neural Engine', desc: 'Enterprise data integration with custom LLM architecture.' },
    { id: '02', title: 'SaaS Platform', desc: 'High-performance dashboard for real-time logistics tracking.' },
    { id: '03', title: 'Cyber Shield', desc: 'Threat detection system utilizing behavioral analysis.' },
    { id: '04', title: 'Fintech App', desc: 'Secure, low-latency currency exchange microservices.' },
    { id: '05', title: 'E-Comm UI', desc: 'Award-winning minimalist shopping experience.' },
    { id: '06', title: 'Cloud Core', desc: 'Automated CI/CD infrastructure for scalable nodes.' },
  ];

  return (
    <section id="work">
      <h2 className="section-title">Latest Work </h2>
      <div className="work-grid autoShow">
        {projects.map((p) => (
          <motion.div key={p.id} whileHover={{ y: -10 }} className="work-card imageReveal">
            <div className="work-id">{p.id}</div>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>{p.title}</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
            <ChevronRight style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem' }} />
          </motion.div>
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
    { name: 'Cloud Native (AWS)', level: 80 },
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

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'ai', text: "Hello. I am Nathan's digital twin. How can I assist you?" }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(`AI rep for dev Nathan. Concisely answer: ${userText}`);
      setMessages(prev => [...prev, { role: 'ai', text: result.response.text() }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'ai', text: "Link offline. Try again." }]);
    } finally { setLoading(false); }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="chat-trigger"><MessageSquare /></button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="chat-window">
            <div className="chat-header">
              <span style={{ fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '1px' }}>NATHAN.AI</span>
              <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text)' }}><X size={16} /></button>
            </div>
            <div ref={scrollRef} className="chat-messages scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={`message ${m.role === 'user' ? 'msg-user' : 'msg-ai'}`}>{m.text}</div>
              ))}
            </div>
            <div style={{ padding: '1rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '0.5rem' }}>
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                placeholder="Ask something..." style={{ flex: 1, background: 'transparent', border: '1px solid var(--border)', borderRadius: '4px', padding: '0.5rem', color: 'var(--text)', outline: 'none' }} />
              <button onClick={handleSend} className="btn" style={{ padding: '0.5rem' }}><Send size={16} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
      <Work />
      <Skills />
      <section id="contact" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Get in Touch</h2>
        <p style={{ color: 'var(--muted)', letterSpacing: '2px', marginBottom: '3rem' }}>NATEAZIKE27@GMAIL.COM</p>
        <form action="https://formspree.io/f/mqakpzoz" method="POST" style={{ maxWidth: '600px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
          <input name="name" placeholder="Full Name" required style={{ padding: '1.25rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)' }} />
          <input name="email" type="email" placeholder="Email" required style={{ padding: '1.25rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)' }} />
          <textarea name="message" placeholder="Message" style={{ padding: '1.25rem', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)', minHeight: '150px' }} />
          <button type="submit" className="btn btn-primary" style={{ padding: '1.25rem' }}>Send Transmission</button>
        </form>
      </section>
      <footer style={{ padding: '3rem 10%', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', opacity: 0.4, fontSize: '0.6rem', letterSpacing: '1px' }}>
        <span>© 2026 Nathan Company</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Github size={14} />
          <Linkedin size={14} />
        </div>
      </footer>
      <AIChat />
    </main>
  );
}