"use client";

import { useState } from "react";
import ContributorForm from "../../components/join/ContributorForm";
import ProjectAdminForm from "../../components/join/ProjectAdminForm";

export default function JoinPage() {
  const [role, setRole] = useState<"contributor" | "admin">("contributor");

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">

      <h1 className="text-5xl font-bold text-center">
        Join SOSP
      </h1>

      <p className="mt-4 text-center text-gray-600">
        Choose how you want to participate in SOSP.
      </p>

      <div className="mt-10 flex justify-center gap-4">

        <button
          onClick={() => setRole("contributor")}
          className={`rounded-lg px-6 py-3 font-semibold ${
            role === "contributor"
              ? "bg-blue-600 text-white"
              : "border"
          }`}
        >
          Contributor
        </button>

        <button
          onClick={() => setRole("admin")}
          className={`rounded-lg px-6 py-3 font-semibold ${
            role === "admin"
              ? "bg-indigo-600 text-white"
              : "border"
          }`}
        >
          Project Admin
        </button>

      </div>

      <div className="mt-10 rounded-xl border bg-white p-8 shadow">

        {role === "contributor" ? (
          <ContributorForm />
        ) : (
          <ProjectAdminForm />
        )}

      </div>

    </main>
  );
}