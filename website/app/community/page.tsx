import { supabase } from "@/lib/supabase";


export default async function CommunityPage(){


const {data:activities}=await supabase
.from("activities")
.select("*")
.order("created_at",{ascending:false})
.limit(20);



return (

<main className="min-h-screen px-6 py-20">


<section className="max-w-5xl mx-auto">


<h1 className="text-5xl font-bold">
SOSP Community
</h1>


<p className="mt-4 text-gray-600">
See what contributors are building and sharing.
</p>



<div className="mt-10 space-y-5">


{
activities?.map((activity)=>(


<div
key={activity.id}
className="border rounded-xl p-6"
>


<h2 className="text-xl font-bold">
{activity.title}
</h2>


<p className="mt-2">
{activity.description}
</p>


<p className="mt-3 text-gray-500">
By {activity.author}
</p>


</div>


))
}


</div>


</section>


</main>

)

}