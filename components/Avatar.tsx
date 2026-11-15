'use client';
import {useState}from'react';import{profile}from'@/content/profile';
export function Avatar({className=''}:{className?:string}){
 const[error,setError]=useState(false);
 return <div className={'avatar-shell '+className}>{error?<div className="avatar-fallback" aria-label="Profile photo unavailable">TP.</div>:<img src={profile.avatar} alt="Foto profil GitHub asli Tri Puji Antoro (Torrayz)" loading="eager" referrerPolicy="no-referrer" onError={()=>setError(true)}/>}<div className="portrait-credit">ORIGINAL PORTRAIT / @TORRAYZ</div></div>
}