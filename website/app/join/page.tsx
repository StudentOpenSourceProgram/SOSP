"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
export default function JoinPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [college, setCollege] = useState("");
  const [motivation, setMotivation] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from("applications")
      .insert([
        {
          full_name: fullName,
          email: email,
          github: github,
          college: college,
          motivation: motivation,
        },
      ]);

    if (error) {
      alert("Submission failed.");
      console.error(error);
    } else {
      alert("Application submitted successfully!");

      setFullName("");
      setEmail("");
      setGithub("");
      setCollege("");
      setMotivation("");
    }
  };
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-3 text-5xl font-bold">Join SOSP</h1>

      <p className="mb-10 text-gray-600">
        Become a part of the Student Open Source Program and start your
        open-source journey.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full rounded-lg border p-3"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

       <input
  type="text"
  placeholder="GitHub Username"
  value={github}
  onChange={(e) => setGithub(e.target.value)}
  className="w-full rounded-lg border p-3"
/>

        <input
  type="text"
  placeholder="College"
  value={college}
  onChange={(e) => setCollege(e.target.value)}
  className="w-full rounded-lg border p-3"
/>

        <textarea
  placeholder="Why do you want to join SOSP?"
  rows={5}
  value={motivation}
  onChange={(e) => setMotivation(e.target.value)}
  className="w-full rounded-lg border p-3"
/>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </main>
  );
}