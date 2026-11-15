'use client';
import Link from'next/link';import{ArrowUpRight}from'lucide-react';import{motion,useReducedMotion}from'motion/react';
import type{Project}from'@/lib/projects';
export function ProjectCard({project,index}:{project:Project,index:number}){
 const reduce=useReducedMotion();return <motion.article className={'project-card project-'+project.tint} initial={reduce?false:{opacity:0,y:32}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:reduce?0:.65,delay:reduce?0:index*.09}} whileHover={reduce?{}:{y:-5}}>
  <Link href={'/projects/'+project.slug} className="project-card-link" aria-label={'View '+project.name+' project case study'}>
   <div className="project-art" aria-hidden="true"><span className="project-art-top"><i/> <b>{project.kicker}</b><i/></span><div className="project-art-window"><div className="art-browser"><i/><i/><i/></div><div className="art-headline">{project.name}</div><div className="art-subline">{project.category} / {project.year}</div><div className="art-ui-slab"><div/><div/><div/></div></div><span className="project-art-identity">{project.number} / TORRAYZ</span></div>
   <div className="project-card-info"><p className="project-chipline"><span>{project.category}</span><span>{project.stack[0]}</span></p><div className="project-card-title"><h3>{project.name}</h3><ArrowUpRight size={22}/></div><p>{project.summary}</p><div className="project-card-tech">{project.stack.slice(0,3).map(s=><span key={s}>{s}</span>)}</div></div>
  </Link></motion.article>
}