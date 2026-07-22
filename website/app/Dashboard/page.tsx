import { supabase } from "@/lib/supabase";


export default async function DashboardPage(){

const {data:contributors}=await supabase
.from("contributors")
.select("*")
.limit(1);


const user = contributors?.[0];


return (

<main className="min-h-screen px-6 py-20">

<section className="max-w-5xl mx-auto">


<h1 className="text-4xl font-bold">
Contributor Dashboard
</h1>


<div className="mt-10 grid md:grid-cols-3 gap-6">


<div className="border rounded-xl p-6">

<p className="text-gray-500">
Name
</p>

<h2 className="text-2xl font-bold">
{user?.name || "Contributor"}
</h2>

</div>



<div className="border rounded-xl p-6">

<p className="text-gray-500">
Points
</p>

<h2 className="text-3xl font-bold">
{user?.points || 0}
</h2>

</div>



<div className="border rounded-xl p-6">

<p className="text-gray-500">
Contributions
</p>

<h2 className="text-3xl font-bold">
{user?.tasks_completed || 0}
</h2>

</div>


</div>



<div className="mt-10 border rounded-xl p-6">


<h2 className="text-2xl font-bold">
Badges
</h2>


<div className="flex gap-3 mt-5">


<span className="border px-4 py-2 rounded">
🚀 First Contribution
</span>


<span className="border px-4 py-2 rounded">
🔥 Active Contributor
</span>


<span className="border px-4 py-2 rounded">
⭐ Community Member
</span>


</div>


</div>



</section>

</main>

)

}