-- TORRAYZ Editorial portfolio: owner-managed credential records and private proof files.
-- Reuses portfolio_inquiries and app_memberships from Studio V2.
create table if not exists public.portfolio_credentials (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(btrim(title)) between 3 and 150),
  category text not null check (category in ('TOEFL','BNSP','Programming','Other')),
  issuer text not null check (char_length(btrim(issuer)) between 2 and 150),
  issued_on date,
  verification_url text check (verification_url is null or (char_length(verification_url) <= 500 and verification_url ~ '^https://')),
  storage_path text check (storage_path is null or char_length(storage_path) <= 250),
  summary text not null default '' check (char_length(summary) <= 1000),
  status text not null default 'draft' check (status in ('draft','published')),
  created_by uuid references auth.users(id) on delete set null default auth.uid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists portfolio_credentials_status_idx on public.portfolio_credentials(status,issued_on desc);
alter table public.portfolio_credentials enable row level security;
revoke all on public.portfolio_credentials from anon,authenticated;
grant select on public.portfolio_credentials to anon,authenticated;
grant insert,update,delete on public.portfolio_credentials to authenticated;

drop policy if exists "Portfolio published credentials visible" on public.portfolio_credentials;
create policy "Portfolio published credentials visible" on public.portfolio_credentials for select to anon,authenticated using (
 status='published' or exists (select 1 from public.app_memberships m where m.user_id=(select auth.uid()) and m.app_key='TORRAYZ_STUDIO' and m.role in ('owner','admin'))
);
drop policy if exists "Portfolio owner insert credentials" on public.portfolio_credentials;
create policy "Portfolio owner insert credentials" on public.portfolio_credentials for insert to authenticated with check (
 created_by=(select auth.uid()) and exists (select 1 from public.app_memberships m where m.user_id=(select auth.uid()) and m.app_key='TORRAYZ_STUDIO' and m.role in ('owner','admin'))
);
drop policy if exists "Portfolio owner update credentials" on public.portfolio_credentials;
create policy "Portfolio owner update credentials" on public.portfolio_credentials for update to authenticated using (
 exists (select 1 from public.app_memberships m where m.user_id=(select auth.uid()) and m.app_key='TORRAYZ_STUDIO' and m.role in ('owner','admin'))
) with check (
 exists (select 1 from public.app_memberships m where m.user_id=(select auth.uid()) and m.app_key='TORRAYZ_STUDIO' and m.role in ('owner','admin'))
);
drop policy if exists "Portfolio owner delete credentials" on public.portfolio_credentials;
create policy "Portfolio owner delete credentials" on public.portfolio_credentials for delete to authenticated using (
 exists (select 1 from public.app_memberships m where m.user_id=(select auth.uid()) and m.app_key='TORRAYZ_STUDIO' and m.role in ('owner','admin'))
);

-- Bucket creation using Supabase Storage's documented SQL interface; only metadata, never storage.objects.
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('torrayz-private-credentials','torrayz-private-credentials',false,6291456,ARRAY['application/pdf','image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;

drop policy if exists "Studio owner upload proof" on storage.objects;
create policy "Studio owner upload proof" on storage.objects for insert to authenticated with check (
 bucket_id='torrayz-private-credentials' and exists (select 1 from public.app_memberships m where m.user_id=(select auth.uid()) and m.app_key='TORRAYZ_STUDIO' and m.role in ('owner','admin'))
);
drop policy if exists "Studio owner read proof" on storage.objects;
create policy "Studio owner read proof" on storage.objects for select to authenticated using (
 bucket_id='torrayz-private-credentials' and exists (select 1 from public.app_memberships m where m.user_id=(select auth.uid()) and m.app_key='TORRAYZ_STUDIO' and m.role in ('owner','admin'))
);
drop policy if exists "Studio owner remove proof" on storage.objects;
create policy "Studio owner remove proof" on storage.objects for delete to authenticated using (
 bucket_id='torrayz-private-credentials' and exists (select 1 from public.app_memberships m where m.user_id=(select auth.uid()) and m.app_key='TORRAYZ_STUDIO' and m.role in ('owner','admin'))
);