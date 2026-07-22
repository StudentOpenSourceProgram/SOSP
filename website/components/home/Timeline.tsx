export default function Timeline(){

const weeks=[
{
week:"Week 1",
title:"Explore & Setup",
desc:"Choose projects, understand codebase and setup environment."
},
{
week:"Week 2",
title:"Build & Contribute",
desc:"Work on features and submit contributions."
},
{
week:"Week 3",
title:"Improve & Collaborate",
desc:"Code reviews, discussions and improvements."
},
{
week:"Week 4",
title:"Showcase",
desc:"Final evaluation and contribution recognition."
}
];


return (

<section className="px-6 py-20">

<div className="max-w-5xl mx-auto">


<h2 className="text-4xl font-bold">
Program Timeline
</h2>


<div className="mt-10 space-y-5">


{
weeks.map(item=>(

<div
key={item.week}
className="border rounded-xl p-6"
>

<h3 className="text-xl font-bold">
{item.week}: {item.title}
</h3>


<p className="mt-2 text-gray-600">
{item.desc}
</p>


</div>

))
}


</div>


</div>

</section>

)

}