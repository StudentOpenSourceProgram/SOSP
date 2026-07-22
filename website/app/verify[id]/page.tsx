import {supabase} from "@/lib/supabase";


export default async function VerifyCertificate({
params
}:{
params:{
id:string
}
}){


const {data}=await supabase
.from("certificates")
.select("*")
.eq(
"certificate_id",
params.id
)
.single();



return (

<main className="min-h-screen px-6 py-20">


<div className="max-w-xl mx-auto border rounded-xl p-8">


<h1 className="text-3xl font-bold">
Certificate Verification
</h1>


{
data ? (

<div className="mt-6">


<p>
Certificate ID:
<b>{data.certificate_id}</b>
</p>


<p>
Name:
<b>{data.name}</b>
</p>


<p>
Program:
<b>{data.program}</b>
</p>


<p>
Year:
<b>{data.year}</b>
</p>


</div>


)

:

<p className="mt-5 text-red-600">
Certificate not found
</p>

}


</div>


</main>

)

}