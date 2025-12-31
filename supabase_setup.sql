-- Create contact_leads table in Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS contact_leads (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    company TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    service_interest TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on email for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_leads_email ON contact_leads(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contact_leads_created_at ON contact_leads(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations for service role
CREATE POLICY "Enable all access for service role"
ON contact_leads
FOR ALL
USING (true)
WITH CHECK (true);
