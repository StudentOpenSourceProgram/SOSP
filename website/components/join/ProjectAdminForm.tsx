"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProjectAdminForm() {
  const [loading, setLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [projectName, setProjectName] = useState("");
  const [repository, setRepository] = useState("");
  const [techStack, setTechStack] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [motivation, setMotivation] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.from("project_admins").insert([
      {
        full_name: fullName,
        email,
        github,
        project_name: projectName,
        repository,
        tech_stack: techStack,
        project_description: projectDescription,
        motivation,
      },
    ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Project submitted successfully!");

    setFullName("");
    setEmail("");
    setGithub("");
    setProjectName("");
    setRepository("");
    setTechStack("");
    setProjectDescription("");
    setMotivation("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <input
        className="w-full rounded-lg border p-3"
        placeholder="Full Name"
        value={fullName}
        onChange={(e)=>setFullName(e.target.value)}
        required
      />

      <input
        type="email"
        className="w-full rounded-lg border p-3"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
      />

      <input
        className="w-full rounded-lg border p-3"
        placeholder="GitHub Username"
        value={github}
        onChange={(e)=>setGithub(e.target.value)}
        required
      />

      <input
        className="w-full rounded-lg border p-3"
        placeholder="Project Name"
        value={projectName}
        onChange={(e)=>setProjectName(e.target.value)}
        required
      />

      <input
        className="w-full rounded-lg border p-3"
        placeholder="Repository URL"
        value={repository}
        onChange={(e)=>setRepository(e.target.value)}
        required
      />

      <input
        className="w-full rounded-lg border p-3"
        placeholder="Tech Stack"
        value={techStack}
        onChange={(e)=>setTechStack(e.target.value)}
        required
      />

      <textarea
        rows={4}
        className="w-full rounded-lg border p-3"
        placeholder="Project Description"
        value={projectDescription}
        onChange={(e)=>setProjectDescription(e.target.value)}
        required
      />

      <textarea
        rows={4}
        className="w-full rounded-lg border p-3"
        placeholder="Why should SOSP accept your project?"
        value={motivation}
        onChange={(e)=>setMotivation(e.target.value)}
        required
      />

      <button
        disabled={loading}
        className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700"
      >
        {loading ? "Submitting..." : "Apply as Project Admin"}
      </button>

    </form>
  );
}