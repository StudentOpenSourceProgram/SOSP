export default function JourneyPage(){

const steps=[
{
title:"Explore",
desc:"Find projects that match your interests and skills."
},
{
title:"Learn",
desc:"Understand codebase, documentation and contribution process."
},
{
title:"Build",
desc:"Work with maintainers and create meaningful features."
},
{
title:"Contribute",
desc:"Submit quality contributions and collaborate with community."
},
{
title:"Showcase",
desc:"Highlight your work through portfolio and certificates."
}
];


return (

<main className="min-h-screen px-6 py-20">

<section className="max-w-5xl mx-auto">


<h1 className="text-5xl font-bold">
Your Open Source Journey
</h1>


<p className="mt-5 text-gray-600">
A simple path for students to grow from beginners
to confident open source contributors.
</p>



<div className="mt-12 space-y-6">


{
steps.map((step,index)=>(


<div
key={step.title}
className="border rounded-xl p-6"
>


<div className="flex gap-5">


<div className="text-3xl font-bold">
0{index+1}
</div>


<div>

<h2 className="text-2xl font-bold">
{step.title}
</h2>


<p className="mt-2">
{step.desc}
</p>


</div>


</div>


</div>


))
}


</div>


</section>


</main>

)

}