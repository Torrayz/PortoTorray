'use client';
import type{ReactNode}from'react';import{motion,useReducedMotion}from'motion/react';
export function Reveal({children,className='',delay=0}:{children:ReactNode;className?:string;delay?:number}){
 const reduce=useReducedMotion();return <motion.div className={className} initial={reduce?false:{opacity:0,y:26,filter:'blur(5px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} viewport={{once:true,amount:.08,margin:'0px 0px -45px 0px'}} transition={{duration:reduce?0:.74,delay:reduce?0:delay,ease:[.2,.75,.2,1]}}>{children}</motion.div>
}