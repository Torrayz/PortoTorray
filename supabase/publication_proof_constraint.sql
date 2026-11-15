-- Published credentials require at least one supporting reference.
alter table public.portfolio_credentials
  add constraint portfolio_credentials_publish_requires_proof
  check (status='draft' or storage_path is not null or verification_url is not null);