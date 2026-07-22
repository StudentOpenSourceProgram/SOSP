import {supabase} from "@/lib/supabase";


export default async function MentorsPage(){


const {data:mentors}=await supabase
.from("mentors")
.select("*")
.eq("status","approved");



return (

<main className="min-h-screen px-6 py-20">


<section className="max-w-6xl mx-auto">


<h1 className="text-5xl font-bold">
Our Mentors
</h1>


<p className="mt-4 text-gray-600">
Experienced developers guiding students through open source.
</p>



<div className="grid md:grid-cols-3 gap-6 mt-10">


{
mentors?.map((mentor)=>(


<div
key={mentor.id}
className="border rounded-xl p-6"
>


<h2 className="text-2xl font-bold">
{mentor.name}
</h2>


<p className="mt-3">
{mentor.expertise}
</p>


<a
href={mentor.github}
target="_blank"
className="text-blue-600 mt-3 inline-block"
>
GitHub Profile
</a>


</div>


))
}


</div>


</section>


</main>

)

}