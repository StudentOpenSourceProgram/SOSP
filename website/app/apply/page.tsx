"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ApplyPage() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    github: "",
    linkedin: "",
    college: "",
    year: "",
    skills: "",
    motivation: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from("applications")
      .insert([form]);

    if (error) {
      setMessage("Error submitting application");
      console.log(error);
    } else {
      setMessage("Application submitted successfully!");
      setForm({
        full_name: "",
        email: "",
        github: "",
        linkedin: "",
        college: "",
        year: "",
        skills: "",
        motivation: "",
      });
    }
  };

  return (
    <main>
      <h1>SOSP Application Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Full Name"
          value={form.full_name}
          onChange={(e)=>setForm({...form, full_name:e.target.value})}
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e)=>setForm({...form, email:e.target.value})}
        />

        <input
          placeholder="GitHub URL"
          value={form.github}
          onChange={(e)=>setForm({...form, github:e.target.value})}
        />

        <input
          placeholder="LinkedIn URL"
          value={form.linkedin}
          onChange={(e)=>setForm({...form, linkedin:e.target.value})}
        />

        <input
          placeholder="College"
          value={form.college}
          onChange={(e)=>setForm({...form, college:e.target.value})}
        />

        <input
          placeholder="Year"
          value={form.year}
          onChange={(e)=>setForm({...form, year:e.target.value})}
        />

        <input
          placeholder="Skills"
          value={form.skills}
          onChange={(e)=>setForm({...form, skills:e.target.value})}
        />

        <textarea
          placeholder="Why do you want to join SOSP?"
          value={form.motivation}
          onChange={(e)=>setForm({...form, motivation:e.target.value})}
        />

        <button type="submit">
          Submit Application
        </button>

      </form>

      <p>{message}</p>
    </main>
  );
}