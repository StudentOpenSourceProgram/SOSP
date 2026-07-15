"use server";

import { supabase } from "@/lib/supabase";

export async function updateProjectStatus(
  id: string,
  status: string
) {

  const { error } = await supabase
    .from("projects")
    .update({
      status: status
    })
    .eq("id", id);


  if(error){
    throw new Error(error.message);
  }

}