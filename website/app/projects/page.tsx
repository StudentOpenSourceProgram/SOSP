import { supabase } from "@/lib/supabase";


export default async function ProjectsPage(){


const {data:projects}=await supabase
.from("projects")
.select("*")
.eq("status","approved");



return (

<main className="min-h-screen px-6 py-20">


<section className="max-w-6xl mx-auto">


<h1 className="text-5xl font-bold">
Open Source Projects
</h1>


<p className="mt-4 text-gray-600">
Explore projects and contribute with SOSP community.
</p>



<div className="grid md:grid-cols-3 gap-6 mt-12">


{
projects?.map((project)=>(


<div
key={project.id}
className="border rounded-xl p-6 hover:shadow-lg transition"
>


<h2 className="text-2xl font-bold">
{project.title}
</h2>



<p className="mt-3 text-gray-600">
{project.description}
</p>



<div className="mt-5 space-y-2">


<p>
<b>Difficulty:</b>{" "}
{project.difficulty || "Beginner"}
</p>


<p>
<b>Tech:</b>{" "}
{project.tech_stack || "Not specified"}
</p>


<p>
<b>Mentor:</b>{" "}
{project.mentor || "Community"}
</p>


</div>



{
project.github_url && (

<a
href={project.github_url}
target="_blank"
className="inline-block mt-5 bg-black text-white px-5 py-2 rounded"
>
View GitHub
</a>

)
}



</div>


))
}



</div>


</section>


</main>

)

}