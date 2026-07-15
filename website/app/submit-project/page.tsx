"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SubmitProject() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [techStack, setTechStack] = useState("");
    const [githubUrl, setGithubUrl] = useState("");
    const [adminName, setAdminName] = useState("");

    async function handleSubmit() {

        const { error } = await supabase
            .from("projects")
            .insert([
                {
                    title,
                    description,
                    tech_stack: techStack,
                    github_url: githubUrl,
                    admin_name: adminName,
                    status: "pending"
                }
            ]);


        if (error) {
            alert(error.message);
        }
        else {
            alert("Project submitted successfully!");

            setTitle("");
            setDescription("");
            setTechStack("");
            setGithubUrl("");
            setAdminName("");
        }

    }


    return (
        <main className="min-h-screen px-6 py-20">

            <div className="mx-auto max-w-xl">

                <h1 className="text-4xl font-bold">
                    Submit Your Project
                </h1>


                <div className="mt-8 space-y-4">


                    <input
                        className="w-full rounded border p-3"
                        placeholder="Project Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />


                    <textarea
                        className="w-full rounded border p-3"
                        placeholder="Project Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />


                    <input
                        className="w-full rounded border p-3"
                        placeholder="Tech Stack (Next.js, React, AI...)"
                        value={techStack}
                        onChange={(e) => setTechStack(e.target.value)}
                    />


                    <input
                        className="w-full rounded border p-3"
                        placeholder="GitHub Repository URL"
                        value={githubUrl}
                        onChange={(e) => setGithubUrl(e.target.value)}
                    />


                    <input
                        className="w-full rounded border p-3"
                        placeholder="Project Admin Name"
                        value={adminName}
                        onChange={(e) => setAdminName(e.target.value)}
                    />


                    <button
                        onClick={handleSubmit}
                        className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                    >
                        Submit Project
                    </button>


                </div>

            </div>

        </main>
    );
}