import Image from 'next/image';
import type {CSSProperties} from 'react';

/**
 * Visual technology index. Brand artwork is redistributed from Devicon
 * (https://github.com/devicons/devicon) and is served locally from /public.
 * Keep all logos as SVG so they stay sharp on high-density displays.
 */
const technologies = [
  {name:'Next.js',file:'nextjs',group:'Frontend',accent:'#222222'},
  {name:'React',file:'react',group:'Frontend',accent:'#0b9cc8'},
  {name:'TypeScript',file:'typescript',group:'Frontend',accent:'#3178c6'},
  {name:'Node.js',file:'nodejs',group:'Backend',accent:'#4b9340'},
  {name:'Go',file:'go',group:'Backend',accent:'#00add8'},
  {name:'PHP',file:'php',group:'Backend',accent:'#777bb3'},
  {name:'Python',file:'python',group:'AI & data',accent:'#3776ab'},
  {name:'PostgreSQL',file:'postgresql',group:'Database',accent:'#336791'},
  {name:'Supabase',file:'supabase',group:'Database',accent:'#248d64'},
  {name:'Docker',file:'docker',group:'DevOps',accent:'#2496ed'},
  {name:'Arch Linux',file:'archlinux',group:'Linux',accent:'#1793d1'},
  {name:'GitHub',file:'github',group:'Git',accent:'#24292f'},
] as const;

export function TechLogoGrid(){
  return <div className="skills-brand-grid" role="list" aria-label="Technology skills and tools">
    {technologies.map((tech)=><div
      className="skills-brand-card" role="listitem" key={tech.name}
      style={{'--brand-accent':tech.accent} as CSSProperties}
      title={`${tech.name} · ${tech.group}`}
    >
      <span className="skills-brand-icon"><Image src={`/skill-logos/${tech.file}.svg`} alt="" aria-hidden="true" width={47} height={47}/></span>
      <span className="skills-brand-name">{tech.name}</span>
      <span className="skills-brand-kind">{tech.group}</span>
    </div>)}
  </div>;
}