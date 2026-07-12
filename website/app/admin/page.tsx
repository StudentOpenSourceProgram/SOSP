import { createClient } from "@supabase/supabase-js";

export default async function AdminPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );

  const { data: applications, error } = await supabase
    .from("applications")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-4 text-red-600">Failed to load applications.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl p-8">
      <h1 className="mb-8 text-4xl font-bold">Admin Dashboard</h1>

      <div className="mb-6 rounded-lg bg-blue-50 p-4">
        <p className="text-lg font-semibold">
          Total Applications: {applications?.length ?? 0}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Email</th>
              <th className="border p-3 text-left">GitHub</th>
              <th className="border p-3 text-left">College</th>
              <th className="border p-3 text-left">Motivation</th>
            </tr>
          </thead>

          <tbody>
            {applications?.map((app) => (
              <tr key={app.id}>
                <td className="border p-3">{app.full_name}</td>
                <td className="border p-3">{app.email}</td>
                <td className="border p-3">{app.github}</td>
                <td className="border p-3">{app.college}</td>
                <td className="border p-3">{app.motivation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}