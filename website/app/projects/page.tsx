import { supabase } from "@/lib/supabase";


export default async function Projects(){

const {data:projects}=await supabase
.from("projects")
.select("*")
.eq("status","approved");


return(

<div className="p-10">

<h1 className="text-4xl font-bold">
SOSP Projects
</h1>


<div className="grid gap-5 mt-10">

{
projects?.map((project)=>(
<div
key={project.id}
className="border p-5 rounded"
>

<h2 className="text-2xl font-bold">
{project.title}
</h2>

<p>
{project.description}
</p>

</div>
))
}

</div>

</div>

)

}