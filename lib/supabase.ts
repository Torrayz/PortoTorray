import {createClient, type SupabaseClient} from '@supabase/supabase-js';
let browserClient:SupabaseClient | null = null;
export function getBrowserSupabase():SupabaseClient|null {
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if(!url || !key)return null;
  if(!browserClient)browserClient=createClient(url,key,{auth:{persistSession:true,autoRefreshToken:true}});
  return browserClient;
}
export function getServerSupabase():SupabaseClient|null {
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if(!url||!key)return null;
  return createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
}
export type Credential={
 id:string;title:string;category:string;issuer:string;issued_on:string|null;
 summary:string;status:'draft'|'published';verification_url:string|null;
 storage_path:string|null;created_by:string|null;created_at:string;
};
export type PublicCredential=Pick<Credential,'id'|'title'|'category'|'issuer'|'issued_on'|'summary'|'status'|'verification_url'|'created_at'>;
export async function getPublishedCredentials():Promise<PublicCredential[]> {
  const client=getServerSupabase();if(!client)return [];
  const {data,error}=await client.from('portfolio_credentials')
    .select('id,title,category,issuer,issued_on,summary,status,verification_url,created_at')
    .eq('status','published').order('issued_on',{ascending:false});
  if(error){console.error('Credential listing failed');return []};
  return (data||[]) as PublicCredential[];
}