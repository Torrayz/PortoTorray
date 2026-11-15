import{NextRequest,NextResponse}from'next/server';import{getServerSupabase}from'@/lib/supabase';
export const runtime='nodejs';
type Form={name?:unknown;email?:unknown;subject?:unknown;message?:unknown;website?:unknown;startedAt?:unknown};
const subjects=new Set(['Project collaboration','Product idea','Technical discussion','Other']);
const str=(x:unknown)=>typeof x==='string'?x.trim():'';
export async function POST(req:NextRequest){
 const origin=req.headers.get('origin');if(origin){try{if(new URL(origin).host!==req.nextUrl.host)return NextResponse.json({ok:false,message:'Forbidden origin'},{status:403})}catch{return NextResponse.json({ok:false,message:'Invalid origin'},{status:403})}}
 const contentType=req.headers.get('content-type')||'';if(!contentType.includes('application/json'))return NextResponse.json({ok:false,message:'Expected JSON'},{status:415});
 const body=await req.text();if(body.length>10800)return NextResponse.json({ok:false,message:'Payload too long'},{status:413});
 let form:Form;try{form=JSON.parse(body) as Form}catch{return NextResponse.json({ok:false,message:'Invalid request'},{status:400})}
 if(form.website)return NextResponse.json({ok:true},{status:202});
 const duration=Date.now()-Number(form.startedAt);if(!Number.isFinite(duration)||duration<1200||duration>45*60*1000)return NextResponse.json({ok:false,message:'Refresh the contact form and try again.'},{status:400});
 const display_name=str(form.name),email=str(form.email).toLowerCase(),subject=str(form.subject),message=str(form.message);
 if(display_name.length<2||display_name.length>90||email.length<5||email.length>180||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||!subjects.has(subject)||message.length<20||message.length>4000)
  return NextResponse.json({ok:false,message:'Check the form fields.'},{status:422});
 const db=getServerSupabase();if(!db)return NextResponse.json({ok:false,message:'Contact form unavailable. Please use GitHub.'},{status:503});
 const{error}=await db.from('portfolio_inquiries').insert({display_name,email,subject,message});
 if(error){const limited=/limit|90 seconds/i.test(error.message);return NextResponse.json({ok:false,message:limited?'Too many messages. Try again later.':'Could not send message. Please use GitHub.'},{status:limited?429:503})}
 return NextResponse.json({ok:true},{status:201,headers:{'Cache-Control':'no-store'}});
}