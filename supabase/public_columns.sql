-- Restrict anonymous direct PostgREST access to public credential metadata only.
-- Private storage paths and user IDs must not be retrievable with the publishable key.
revoke select on public.portfolio_credentials from anon;
grant select (id,title,category,issuer,issued_on,summary,status,verification_url,created_at)
 on public.portfolio_credentials to anon;