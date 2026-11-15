import type{MetadataRoute}from'next';
import{projects}from'@/lib/projects';
export default function sitemap():MetadataRoute.Sitemap {
 const origin='https://torrayz-editorial.vercel.app';
 const pages=['','/projects','/about','/certificates','/contact'];
 return [...pages.map(p=>({url:origin+p,changeFrequency:'monthly' as const,priority:p?0.6:1})),...projects.map(p=>({url:origin+'/projects/'+p.slug,changeFrequency:'monthly' as const,priority:.5}))];
}