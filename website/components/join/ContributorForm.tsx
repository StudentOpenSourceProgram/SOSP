"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContributorForm() {
  const [loading, setLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [skills, setSkills] = useState("");
  const [motivation, setMotivation] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.from("contributors").insert([
      {
        full_name: fullName,
        email,
        github,
        college,
        year,
        skills,
        motivation,
      },
    ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Application Submitted Successfully!");

    setFullName("");
    setEmail("");
    setGithub("");
    setCollege("");
    setYear("");
    setSkills("");
    setMotivation("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        className="w-full rounded-lg border p-3"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <input
        type="email"
        className="w-full rounded-lg border p-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        className="w-full rounded-lg border p-3"
        placeholder="GitHub Username"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
        required
      />

      <input
        className="w-full rounded-lg border p-3"
        placeholder="College"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        required
      />

      <input
        className="w-full rounded-lg border p-3"
        placeholder="Year (1st, 2nd, 3rd...)"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />

      <input
        className="w-full rounded-lg border p-3"
        placeholder="Skills"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        required
      />

      <textarea
        className="w-full rounded-lg border p-3"
        rows={5}
        placeholder="Why do you want to join SOSP?"
        value={motivation}
        onChange={(e) => setMotivation(e.target.value)}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
      >
        {loading ? "Submitting..." : "Apply as Contributor"}
      </button>
    </form>
  );
}