import type {Metadata,Viewport} from 'next';
import './globals.css';
const root='https://torrayz-editorial.vercel.app';
export const metadata:Metadata={
 metadataBase:new URL(root),
 title:{default:'Tri Puji Antoro / Torrayz — Engineering Portfolio',template:'%s — Torrayz'},
 description:'Tri Puji Antoro (Torrayz), Full-Stack Developer & Tech Lead. Software engineering, backend architecture, Linux/DevOps, and applied ML projects.',
 authors:[{name:'Tri Puji Antoro',url:'https://github.com/Torrayz'}],
 keywords:['Tri Puji Antoro','Torrayz','Software Engineer','Next.js','Full-Stack Developer','DevOps','Applied Machine Learning'],
 openGraph:{title:'Tri Puji Antoro / Torrayz',description:'Building digital systems, end-to-end.',url:root,type:'website'},
 icons:{icon:'/favicon.svg'},
 robots:{index:true,follow:true}
};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#1b1d20'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body>{children}</body></html>}