'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useState} from 'react';
import {AnimatePresence,motion,useReducedMotion,useScroll,useSpring} from'motion/react';
import {ArrowUpRight,Menu,X} from'lucide-react';
import {Brand} from'./Brand';
const links=[{label:'Home',href:'/'},{label:'Projects',href:'/projects'},{label:'Expertise',href:'/#expertise'},{label:'Certificates',href:'/certificates'},{label:'About',href:'/about'}];
export function Navbar(){
 const pathname=usePathname();const[open,setOpen]=useState(false);const[scrolled,setScrolled]=useState(false);
 const reduce=useReducedMotion();const{scrollYProgress}=useScroll();const progress=useSpring(scrollYProgress,{stiffness:115,damping:30});
 useEffect(()=>{const fn=()=>setScrolled(window.scrollY>40);window.addEventListener('scroll',fn,{passive:true});fn();return()=>window.removeEventListener('scroll',fn)},[]);
 useEffect(()=>setOpen(false),[pathname]);
 return <><header className={'site-nav'+(scrolled?' is-scrolled':'')}>
  <div className="nav-inner container"><Brand/><nav className="nav-links" aria-label="Primary navigation">{links.map(l=><Link className={(l.href===pathname||(l.href==='/'&&pathname==='/'))?'active':''} href={l.href} key={l.href}>{l.label}</Link>)}</nav>
  <div className="nav-actions"><a className="nav-icon-link" href="https://github.com/Torrayz" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14}/></a><Link href="/contact" className="nav-contact">Contact me <ArrowUpRight size={15}/></Link><button className="mobile-nav-toggle" onClick={()=>setOpen(v=>!v)} type="button" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open}>{open?<X size={23}/>:<Menu size={23}/>}</button></div></div>
  <motion.div className="reading-progress" style={{scaleX:progress}} aria-hidden/>
 </header>
 <AnimatePresence>{open&&<motion.div className="mobile-nav-panel" initial={reduce?false:{opacity:0,y:-16}} animate={{opacity:1,y:0}} exit={reduce?{opacity:0}:{opacity:0,y:-12}} transition={{duration:.23}}><div className="container">{[...links,{label:'Contact',href:'/contact'}].map((l,i)=><Link href={l.href} onClick={()=>setOpen(false)} key={l.href}><span>0{i+1}</span>{l.label}<ArrowUpRight size={19}/></Link>)}</div></motion.div>}</AnimatePresence>
 </>
}