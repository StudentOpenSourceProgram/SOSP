import { supabase } from "@/lib/supabase";


export default async function LeaderboardPage(){


const {data:contributors}=await supabase
.from("contributors")
.select("*")
.eq("status","approved")
.order("points",{ascending:false})
.limit(50);



return (

<main className="min-h-screen px-6 py-20">


<section className="max-w-5xl mx-auto">


<h1 className="text-5xl font-bold">
SOSP Leaderboard
</h1>


<p className="mt-4 text-gray-600">
Top contributors of Student Open Source Program.
</p>



<div className="mt-10 space-y-4">


{
contributors?.map((user,index)=>(


<div
key={user.id}
className="border rounded-xl p-5 flex justify-between items-center"
>


<div>


<h2 className="text-xl font-bold">

#{index+1} {user.name}

</h2>


<p>
{user.github}
</p>


</div>



<div>

<p className="font-bold text-2xl">

{user.points || 0}

</p>

<span>
Points
</span>

</div>



</div>


))
}


</div>


</section>


</main>

)

}