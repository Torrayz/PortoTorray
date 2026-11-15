'use client';
import Link from'next/link';
import {ArrowDownRight,ArrowUpRight,ArrowRight,MapPin,GraduationCap,BriefcaseBusiness,Code2,Database,Terminal,BrainCircuit}from'lucide-react';
import {motion,useReducedMotion,useScroll,useTransform}from'motion/react';
import {profile}from'@/content/profile';import{Avatar}from'./Avatar';
export function Hero({repoCount}:{repoCount:number}){
 const reduce=useReducedMotion();const{scrollY}=useScroll();const y=useTransform(scrollY,[0,740],[0,reduce?0:65]);
 const first=reduce?false:{opacity:0,y:24};const trans=(delay:number)=>({duration:reduce?0:.75,delay:reduce?0:delay,ease:[.22,1,.36,1] as [number,number,number,number]});
 return <section className="hero" id="home"><div className="container hero-grid-layout">
  <div className="hero-intro"><motion.p initial={first} animate={{opacity:1,y:0}} transition={trans(.04)} className="overline overline-bright">TRI PUJI ANTORO <span className="overline-rule"/> TORRAYZ</motion.p>
   <motion.h1 initial={first} animate={{opacity:1,y:0}} transition={trans(.12)}>Building<br/>Digital Systems<br/><em>End-to-End.</em></motion.h1>
   <motion.p className="hero-lead" initial={first} animate={{opacity:1,y:0}} transition={trans(.28)}>Full-Stack Developer, Backend Engineer, dan Tech Lead dengan fokus pada sistem yang andal—dari perancangan database, logika API, sampai pengalaman antarmuka dan deployment.</motion.p>
   <motion.div className="hero-buttons" initial={first} animate={{opacity:1,y:0}} transition={trans(.4)}><Link className="btn btn-light" href="/#work">Lihat proyek <ArrowRight size={17}/></Link><a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark"><Code2 size={17}/> GitHub</a></motion.div>
  </div>
  <motion.div className="hero-photo-container" initial={reduce?false:{opacity:0,clipPath:'inset(0 15% 0 15%)'}} animate={{opacity:1,clipPath:'inset(0 0% 0 0%)'}} transition={{duration:1.15,delay:.22,ease:[.22,1,.36,1]}}><motion.div className="hero-photo-parallax" style={{y}}><Avatar/></motion.div><div className="portrait-angle"/></motion.div>
  <motion.aside className="hero-bio" initial={first} animate={{opacity:1,y:0}} transition={trans(.46)}><p className="overline overline-bright">CURRENT ROLE</p><div className="hero-bio-block"><h2>{profile.companyRole}</h2><p>{profile.company}</p><span>Pengadaan dan solusi IT, katering, serta pengembangan web dan aplikasi.</span></div><div className="bio-rule"/><p className="overline overline-bright">FOCUS AREAS</p><ul className="hero-focus"><li><Code2 size={19}/> Full-Stack & Mobile</li><li><Database size={19}/> Backend & Architecture</li><li><Terminal size={19}/> DevOps & Linux</li><li><BrainCircuit size={19}/> Applied Machine Learning</li></ul></motion.aside>
 </div>
 <div className="container hero-facts"><div className="fact"><strong>{repoCount>0?repoCount:'—'}</strong><span>PUBLIC REPOSITORIES</span></div><div className="fact"><strong>End-to-End</strong><span>ENGINEERING APPROACH</span></div><div className="fact"><strong>UNPAM</strong><span>S1 INFORMATICS / ONGOING</span></div><div className="fact fact-location"><MapPin size={19}/><span>Tangerang, Banten<br/>Indonesia</span></div><a className="hero-explore" href="#work" aria-label="Scroll to selected projects"><ArrowDownRight size={23}/></a></div>
 </section>
}