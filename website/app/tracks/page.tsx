export default function TracksPage() {

const tracks = [
  {
    title: "AI Innovation",
    description:
      "Build intelligent solutions using Artificial Intelligence and Machine Learning."
  },
  {
    title: "Web Development",
    description:
      "Create modern and scalable web applications."
  },
  {
    title: "Open Source Tools",
    description:
      "Develop tools that help developers and communities."
  },
  {
    title: "Cybersecurity",
    description:
      "Explore secure systems and practical security solutions."
  }
];


return (

<main className="min-h-screen px-6 py-20">


<section className="max-w-6xl mx-auto">


<h1 className="text-5xl font-bold">
SOSP Tracks
</h1>


<p className="mt-5 text-gray-600">
Choose a domain and start building with the community.
</p>



<div className="grid md:grid-cols-2 gap-6 mt-12">


{
tracks.map((track)=>(


<div
key={track.title}
className="border rounded-xl p-6"
>


<h2 className="text-2xl font-bold">
{track.title}
</h2>


<p className="mt-3 text-gray-600">
{track.description}
</p>


</div>


))
}


</div>


</section>


</main>

);

}