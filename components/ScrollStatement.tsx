'use client';
import{useEffect,useRef}from'react';
export function ScrollStatement(){
 const root=useRef<HTMLElement>(null);
 useEffect(()=>{let alive=true;let stop=()=>{};
  async function mount(){if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
   const [{gsap},{ScrollTrigger}]=await Promise.all([import('gsap'),import('gsap/ScrollTrigger')]);if(!alive||!root.current)return;
   gsap.registerPlugin(ScrollTrigger);
   const ctx=gsap.context(()=>{gsap.fromTo('.statement-graphic',{xPercent:-5},{xPercent:6,scrollTrigger:{trigger:root.current,start:'top bottom',end:'bottom top',scrub:1.4},ease:'none'})},root);
   stop=()=>ctx.revert();
  }void mount();return()=>{alive=false;stop()}
 },[]);
 return <section ref={root} className="statement-strip" aria-label="Approach"><div className="container"><p className="overline">AN APPROACH / NOT A SLOGAN</p><div className="statement-graphic">DESIGN <span>—</span> BUILD <span>—</span> DEPLOY.</div><p>Memikirkan arsitektur sistem dan pengalaman pengguna sebagai satu proses, bukan dua pekerjaan terpisah.</p></div></section>
}