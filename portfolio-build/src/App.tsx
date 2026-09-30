import React, { useEffect, useRef, useState, useMemo } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  MotionValue,
} from 'framer-motion';
import {
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Sparkles,
  Layers,
  ArrowUpRight,
  Check,
  Copy,
  X,
  MessageCircle,
  Menu,
} from 'lucide-react';

const MARQUEE_ROW_1 = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const MARQUEE_ROW_2 = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const SERVICES = [
  {
    number: '01',
    name: 'Full-Stack Web Engineering',
    description:
      'Designing clean, modular, and performant web applications using modern component architecture, type-safe APIs, and responsive design systems.',
    icon: Code2,
  },
  {
    number: '02',
    name: 'Backend & Cloud Infrastructure',
    description:
      'Architecting resilient backends, RESTful APIs, relational/document database schemas, secure authentication, and cloud automation workflows.',
    icon: Database,
  },
  {
    number: '03',
    name: 'Interactive UI & Motion Systems',
    description:
      'Building smooth, fluid web experiences powered by Framer Motion, micro-interactions, hardware-accelerated animations, and modern CSS.',
    icon: Sparkles,
  },
  {
    number: '04',
    name: 'Business Automation & Portals',
    description:
      'Crafting internal tooling, point-of-sale platforms, and client portals that streamline commercial operations and automate repetitive workflows.',
    icon: Layers,
  },
  {
    number: '05',
    name: 'Custom Domain & Deployment Systems',
    description:
      'End-to-end DevOps configuration, zero-downtime CI/CD pipelines, SSL setups, edge caching, and scalable cloud deployments.',
    icon: Globe,
  },
];

const PROJECTS = [
  {
    number: '01',
    name: 'Kleenit Ghana',
    category: 'Client Website',
    liveUrl: 'https://www.kleenitgh.com/',
    tags: ['Web Design', 'HTML/CSS', 'Responsive', 'SEO'],
    images: {
      col1Top: '/kleenit-hero.png',
      col1Bottom: '/kleenit-services.png',
      col2: '/kleenit-bottom.png',
    },
  },
  {
    number: '02',
    name: 'Oliver Car Rentals',
    category: 'Client Website',
    liveUrl: 'https://www.olivercarrentals.com/',
    tags: ['Web Design', 'Booking System', 'Responsive', 'SEO'],
    images: {
      col1Top: '/oliver-hero.png',
      col1Bottom: '/oliver-fleet.png',
      col2: '/oliver-bottom.png',
    },
  },
  {
    number: '03',
    name: "Beebie's Green Pepper Chinese",
    category: 'Client Website',
    liveUrl: 'https://www.beebiesgreenpepperchinese.com/',
    tags: ['Web Design', 'Menu System', 'Online Ordering', 'SEO'],
    images: {
      col1Top: '/beebies-hero.png',
      col1Bottom: '/beebies-menu.png',
      col2: '/beebies-bottom.png',
    },
  },
];

const GlobalStyles: React.FC = () => {
  useEffect(() => {
    document.title = 'Ernest Ofoe -- Full Stack Developer';
    const linkId = 'kanit-google-font';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,700&display=swap');
      
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Kanit', sans-serif;
      }

      html, body, #root {
        background-color: #0C0C0C;
        color: #D7E2EA;
        overflow-x: clip;
        scroll-behavior: smooth;
      }

      .hero-heading {
        background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #0C0C0C;
      }
      ::-webkit-scrollbar-thumb {
        background: #25282F;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #3B3F4A;
      }

      @keyframes marquee-scroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .marquee-track {
        display: flex;
        width: max-content;
        animation: marquee-scroll 18s linear infinite;
      }
      .marquee-track:hover {
        animation-play-state: paused;
      }
    `}</style>
  );
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.hypot(distX, distY);
      const maxDist = Math.max(rect.width, rect.height) / 2 + padding;

      if (distance < maxDist) {
        setTransition(activeTransition);
        const moveX = distX / strength;
        const moveY = distY / strength;
        setTransform(`translate3d(${moveX}px, ${moveY}px, 0px)`);
      } else {
        setTransition(inactiveTransition);
        setTransform('translate3d(0px, 0px, 0px)');
      }
    };

    const handleMouseLeave = () => {
      setTransition(inactiveTransition);
      setTransform('translate3d(0px, 0px, 0px)');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform,
        transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

const AnimatedChar: React.FC<{
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}> = ({ char, index, total, progress }) => {
  const start = index / total;
  const end = Math.min(start + 2 / total, 1);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span style={{ opacity }} className="absolute inset-0 select-text">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

const AnimatedScrollText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = useMemo(() => Array.from(text), [text]);

  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, i) => (
        <AnimatedChar
          key={i}
          char={char}
          index={i}
          total={chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
};

const ContactButton: React.FC<{
  onClick?: () => void;
  label?: string;
  className?: string;
}> = ({ onClick, label = 'Contact Me', className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full text-white font-medium uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base cursor-pointer select-none ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4" />
    </button>
  );
};

const LiveProjectButton: React.FC<{ href?: string; label?: string }> = ({
  href = '#contact',
  label = 'Live Project',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm md:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 select-none cursor-pointer"
    >
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4" />
    </a>
  );
};

interface HeroSectionProps {
  onOpenContact: () => void;
  avatarUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  avatarUrl,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Top Navigation */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <header className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xl tracking-wider text-white uppercase flex items-center">
              Ernest Ofoe
              <span className="inline-block w-2 h-2 rounded-full bg-[#B600A8] ml-2 animate-pulse" />
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-between items-center gap-10 lg:gap-16 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
            <button
              onClick={() => scrollTo('about')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={onOpenContact}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer text-[#BBCCD7]"
            >
              Contact
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mx-6 mt-4 p-6 rounded-2xl bg-[#141518] border border-white/10 flex flex-col gap-4 text-center uppercase tracking-widest text-sm"
            >
              <button onClick={() => scrollTo('about')} className="py-2 hover:text-white">
                About
              </button>
              <button onClick={() => scrollTo('services')} className="py-2 hover:text-white">
                Services
              </button>
              <button onClick={() => scrollTo('projects')} className="py-2 hover:text-white">
                Projects
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="py-2 text-[#B600A8] font-bold"
              >
                Contact
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </FadeIn>

      {/* Massive Hero Heading */}
      <div className="w-full overflow-hidden z-0">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center mt-6 sm:mt-4 md:-mt-5 text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m ernest
          </h1>
        </FadeIn>

        {/* Name Marquee Ticker */}
        <FadeIn delay={0.3} y={0}>
          <div className="w-full overflow-hidden border-y border-[#B600A8]/30 bg-[#B600A8]/5 py-2 mt-1">
            <div className="marquee-track">
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="flex items-center gap-6 px-6 whitespace-nowrap font-black uppercase tracking-widest text-[#B600A8]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.4rem)' }}
                >
                  Ernest Ofoe
                  <span className="text-[#D7E2EA]/40 font-light">•</span>
                  <span className="text-[#D7E2EA]/70 font-medium tracking-wider">Full Stack Developer</span>
                  <span className="text-[#D7E2EA]/40 font-light">•</span>
                  <span className="italic text-[#D7E2EA]/50 font-light">Accra, Ghana</span>
                  <span className="text-[#B600A8]/60 font-light">✦</span>
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Hero Magnetic Portrait with live photo switch */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="relative group flex justify-center"
        >
          <div className="relative">
            <img
              src={avatarUrl}
              alt="Ernest Ofoe avatar"
              className="w-full h-auto max-h-[75vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] filter contrast-105 pointer-events-none select-none transition-transform duration-300 group-hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20 pointer-events-none">
        <FadeIn delay={0.35} y={20} className="pointer-events-auto">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[280px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a full stack developer driven by crafting striking and scalable digital experiences
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="pointer-events-auto">
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setScrollOffset(offset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Triple = useMemo(
    () => [...MARQUEE_ROW_1, ...MARQUEE_ROW_1, ...MARQUEE_ROW_1],
    []
  );
  const row2Triple = useMemo(
    () => [...MARQUEE_ROW_2, ...MARQUEE_ROW_2, ...MARQUEE_ROW_2],
    []
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3 select-none"
    >
      {/* Row 1 - Moves Right */}
      <div
        className="flex gap-3 will-change-transform"
        style={{
          transform: `translateX(${scrollOffset - 200}px)`,
        }}
      >
        {row1Triple.map((url, i) => (
          <div
            key={`r1-${i}`}
            className="flex-shrink-0 w-[300px] h-[190px] sm:w-[380px] sm:h-[240px] md:w-[420px] md:h-[270px] rounded-2xl overflow-hidden bg-[#16171A] border border-white/5 shadow-md relative group"
          >
            <img
              src={url}
              alt="Engineering visual preview"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Row 2 - Moves Left */}
      <div
        className="flex gap-3 will-change-transform"
        style={{
          transform: `translateX(${-(scrollOffset - 200)}px)`,
        }}
      >
        {row2Triple.map((url, i) => (
          <div
            key={`r2-${i}`}
            className="flex-shrink-0 w-[300px] h-[190px] sm:w-[380px] sm:h-[240px] md:w-[420px] md:h-[270px] rounded-2xl overflow-hidden bg-[#16171A] border border-white/5 shadow-md relative group"
          >
            <img
              src={url}
              alt="Engineering visual preview"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const AboutSection: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* 4 Floating Corner Objects */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10 w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <motion.img
          animate={{ y: [0, -12, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Moon Object"
          className="w-full h-auto object-contain drop-shadow-2xl"
          loading="lazy"
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-10 w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <motion.img
          animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Lego Object"
          className="w-full h-auto object-contain drop-shadow-2xl"
          loading="lazy"
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-10 w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <motion.img
          animate={{ y: [0, 14, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Floating Geometric"
          className="w-full h-auto object-contain drop-shadow-2xl"
          loading="lazy"
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-10 w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <motion.img
          animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Cluster Group"
          className="w-full h-auto object-contain drop-shadow-2xl"
          loading="lazy"
        />
      </FadeIn>

      {/* Main Center Content */}
      <div className="flex flex-col items-center max-w-4xl z-20 text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14 md:mt-16">
          <AnimatedScrollText
            text="With extensive experience in full stack software engineering and interactive design, I focus on building scalable web ecosystems, resilient backends, and striking user experiences. I truly enjoy partnering with forward-thinking businesses and clients to turn bold concepts into memorable, high-converting digital products. Let's build something incredible together!"
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[580px] mx-auto text-center"
          />
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton onClick={onOpenContact} />
        </div>
      </div>
    </section>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-[#0C0C0C]"
    >
      <FadeIn y={30}>
        <h2
          className="font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28 text-[#0C0C0C]"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {SERVICES.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.1} y={30}>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 gap-4 md:gap-12 group transition-all duration-300 hover:bg-[#0C0C0C]/[0.02] px-4 rounded-2xl">
              {/* Service Number */}
              <div
                className="font-black leading-none text-[#0C0C0C] select-none md:w-1/3 group-hover:text-[#B600A8] transition-colors"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              {/* Title & Description */}
              <div className="md:w-2/3 flex flex-col">
                <h3
                  className="font-medium uppercase tracking-tight text-[#0C0C0C] mb-2 flex items-center justify-between"
                  style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {service.name}
                  </span>
                  <service.icon className="w-6 h-6 opacity-40 group-hover:opacity-100 group-hover:text-[#B600A8] transition-all" />
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/70"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{
  project: (typeof PROJECTS)[0];
  index: number;
  totalCards: number;
  onOpenContact: () => void;
}> = ({ project, index, totalCards, onOpenContact }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky h-[85vh] flex items-start justify-center mb-10"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_30px_70px_rgba(0,0,0,0.95)] overflow-hidden"
      >
        {/* Card Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}
            >
              {project.number}
            </span>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold block">
                {project.category}
              </span>
              <h3 className="text-base sm:text-xl md:text-2xl font-bold uppercase text-[#D7E2EA] tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.liveUrl} label="View Live Site" />
        </div>

        {/* 2-Column Image Grid (40% left, 60% right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-4 sm:pt-6 h-full items-stretch">
          <div className="md:col-span-5 flex flex-col gap-4">
            <div
              className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-[#D7E2EA]/20 bg-neutral-900 group relative"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.images.col1Top}
                alt={`${project.name} preview`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div
              className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-[#D7E2EA]/20 bg-neutral-900 group relative"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.images.col1Bottom}
                alt={`${project.name} detail`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right tall image */}
          <div className="md:col-span-7 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-[#D7E2EA]/20 bg-neutral-900 min-h-[220px] relative group">
            <img
              src={project.images.col2}
              alt={`${project.name} showcase`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={onOpenContact}
                className="text-xs text-[#D7E2EA] hover:text-[#B600A8] uppercase tracking-wider font-semibold cursor-pointer"
              >
                Inquire Project
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection: React.FC<{ onOpenContact: () => void }> = ({
  onOpenContact,
}) => {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-10 pt-20 pb-36"
    >
      <FadeIn y={40}>
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
          <p className="text-sm sm:text-base text-[#D7E2EA]/60 uppercase tracking-widest mt-4">
            Curated Full-Stack & 3D Deliverables &bull; Ernest Ofoe
          </p>
        </div>
      </FadeIn>

      <div className="flex flex-col relative max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
            onOpenContact={onOpenContact}
          />
        ))}
      </div>
    </section>
  );
};

const ContactFooterSection: React.FC<{ onOpenContact: () => void }> = ({
  onOpenContact,
}) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 md:px-10 py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">
            Available for new opportunities
          </span>
          <h2 className="hero-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight mt-2">
            Let&apos;s talk
          </h2>
          <p className="text-[#D7E2EA]/70 mt-3 max-w-md font-light text-sm sm:text-base leading-relaxed">
            Ready to collaborate on web engineering, custom interfaces, or creative digital platforms?
            Connect directly with Ernest Ofoe.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <ContactButton onClick={onOpenContact} label="Send Inquiry" />
          </div>
        </div>

        {/* Live Personal Contacts (Phone, Email, TikTok) */}
        <div className="flex flex-col gap-4 w-full md:w-[420px]">
          {/* Email */}
          <div className="flex items-center justify-between gap-4 bg-[#141518] hover:bg-[#1a1c22] border border-[#D7E2EA]/15 p-4 rounded-2xl transition-all duration-300">
            <a
              href="mailto:eofoe02@gmail.com"
              className="flex items-center gap-3.5 flex-1 overflow-hidden"
            >
              <div className="p-2.5 rounded-xl bg-purple-900/40 text-purple-300">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] uppercase tracking-wider text-[#D7E2EA]/50 font-bold">
                  Email
                </div>
                <div className="text-sm sm:text-base font-medium text-white truncate">
                  eofoe02@gmail.com
                </div>
              </div>
            </a>
            <button
              onClick={() => copyToClipboard('eofoe02@gmail.com', 'email')}
              className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition"
              title="Copy Email"
            >
              {copiedType === 'email' ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between gap-4 bg-[#141518] hover:bg-[#1a1c22] border border-[#D7E2EA]/15 p-4 rounded-2xl transition-all duration-300">
            <a
              href="tel:0505739972"
              className="flex items-center gap-3.5 flex-1 overflow-hidden"
            >
              <div className="p-2.5 rounded-xl bg-blue-900/40 text-blue-300">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#D7E2EA]/50 font-bold">
                  Phone
                </div>
                <div className="text-sm sm:text-base font-medium text-white">
                  0505739972
                </div>
              </div>
            </a>
            <button
              onClick={() => copyToClipboard('0505739972', 'phone')}
              className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition"
              title="Copy Phone"
            >
              {copiedType === 'phone' ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@dababyx04"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-[#141518] hover:bg-[#1a1c22] border border-[#D7E2EA]/15 p-4 rounded-2xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-pink-900/40 text-pink-300 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.95-4.49V8.62a8.28 8.28 0 0 0 4.82 1.52v-3.45z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#D7E2EA]/50 font-bold">
                  TikTok
                </div>
                <div className="text-sm sm:text-base font-medium text-white">
                  @dababyx04
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition" />
          </a>
        </div>
      </div>

      {/* Bottom copyright line */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center text-xs text-[#D7E2EA]/40 gap-4">
        <div>&copy; {new Date().getFullYear()} Ernest Ofoe. All rights reserved.</div>
        <div className="tracking-widest uppercase">Full Stack Developer &bull; Accra, Ghana</div>
      </div>
    </footer>
  );
};

const ContactModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setForm({ name: '', email: '', message: '' });
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg rounded-3xl bg-[#141518] border border-white/10 p-6 sm:p-8 shadow-2xl z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-white/10 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#B600A8]/20 flex items-center justify-center text-[#B600A8] mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-white mb-1">
                  Message Sent!
                </h3>
                <p className="text-sm text-gray-400">
                  Thanks for reaching out! Ernest will get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">
                    Let&apos;s Build Together
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                    Contact Ernest
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Direct line: 0505739972 &bull; eofoe02@gmail.com
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Samuel Adjetey"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#1C1E24] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#B600A8] transition text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#1C1E24] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#B600A8] transition text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your project, timeline, and goals..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#1C1E24] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#B600A8] transition text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background:
                        'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    }}
                    className="w-full py-3.5 rounded-xl text-white font-medium uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition cursor-pointer mt-2"
                  >
                    <span>Send Message</span>
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const AVATAR_URL = '/avatar.png';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] overflow-x-clip selection:bg-[#B600A8] selection:text-white">
      {/* Global CSS Styles & Google Fonts Kanit */}
      <GlobalStyles />

      {/* 1. Hero Section */}
      <HeroSection
        avatarUrl={AVATAR_URL}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* 2. Marquee horizontal gifs */}
      <MarqueeSection />

      {/* 3. About Section with 3D elements & animated text */}
      <AboutSection onOpenContact={() => setContactModalOpen(true)} />

      {/* 4. Crisp White Services Section */}
      <ServicesSection />

      {/* 5. Sticky Stacking Project Cards */}
      <ProjectsSection onOpenContact={() => setContactModalOpen(true)} />

      {/* 6. Contact & Footer Section */}
      <ContactFooterSection onOpenContact={() => setContactModalOpen(true)} />

      {/* Contact modal pop-up */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}