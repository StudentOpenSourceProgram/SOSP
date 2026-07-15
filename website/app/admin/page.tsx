import { supabase } from "@/lib/supabase";
import { updateProjectStatus } from "./actions";
import { revalidatePath } from "next/cache";


export default async function AdminPage() {

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("status","pending");


  async function approveProject(id:string){

    "use server";

    await updateProjectStatus(
      id,
      "approved"
    );

    revalidatePath("/admin");
    revalidatePath("/projects");
  }


  async function rejectProject(id:string){

    "use server";

    await updateProjectStatus(
      id,
      "rejected"
    );

    revalidatePath("/admin");
  }


  return (
    <main className="min-h-screen px-6 py-20">

      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>


      <div className="mt-10 space-y-5">

      {projects?.map((project)=>(

        <div
          key={project.id}
          className="border rounded-lg p-6"
        >

          <h2 className="text-2xl font-bold">
            {project.title}
          </h2>

          <p>
            {project.description}
          </p>


          <div className="mt-5 flex gap-4">


            <form action={approveProject.bind(null, project.id)}>
              <button
                className="bg-green-600 text-white px-5 py-2 rounded"
              >
                Approve
              </button>
            </form>


            <form action={rejectProject.bind(null, project.id)}>
              <button
                className="bg-red-600 text-white px-5 py-2 rounded"
              >
                Reject
              </button>
            </form>


          </div>

        </div>

      ))}

      </div>

    </main>
  );
}