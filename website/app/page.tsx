export default function Hero(){

return (

<section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">


<h1 className="text-5xl md:text-6xl font-bold">
Student Open Source Program
</h1>


<p className="mt-6 text-xl text-gray-600 max-w-3xl">

A student-driven open source ecosystem where developers
learn, collaborate and build real-world projects.

</p>


<div className="flex gap-5 mt-10">


<a
href="/join"
className="bg-black text-white px-8 py-3 rounded-lg"
>
Join SOSP
</a>



<a
href="/projects"
className="border px-8 py-3 rounded-lg"
>
Explore Projects
</a>


</div>


</section>

)

}