import { Suspense } from "react";
import { connection } from "next/server";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { logout } from "../login/actions";

async function DashboardContent() {
  await connection();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, grade")
    .eq("id", user.id)
    .single();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">
        Welcome, {profile?.full_name ?? user.email}
      </h1>
      <p className="mt-2 text-sm text-gray-600">{user.email}</p>
      <form action={logout}>
        <button className="mt-6 underline">Log out</button>
      </form>
    </main>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<p className="p-8">Loading...</p>}>
      <DashboardContent />
    </Suspense>
  );
}
