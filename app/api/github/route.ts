import{NextResponse}from'next/server';import{getPublicRepos}from'@/lib/github';
export const revalidate=3600;
export async function GET(){const rows=await getPublicRepos();return NextResponse.json({repositories:rows,total:rows.length},{headers:{'Cache-Control':'public, max-age=0, s-maxage=3600, stale-while-revalidate=600'}})}