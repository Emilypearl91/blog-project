import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from('blog').select();
  return {
    blog: data ?? [],
  };
}
