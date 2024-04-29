import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://aabjrxzrquhtfaqunzbe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhYmpyeHpycXVodGZhcXVuemJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5OTExNjgsImV4cCI6MjAyODU2NzE2OH0.tS52nEnyUg7wjD9i0LYYrU0k0CqBWmH1aDM7FLaVp-s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
