"use client";

import { useActionState } from "react";
import Link from "next/link";
import { login } from "./actions";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, null);

  return (
    <form action={formAction} className="mx-auto mt-24 flex max-w-sm flex-col gap-3 px-4">
      <h1 className="text-2xl font-semibold">Log in to Edge</h1>
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
      <input name="email" type="email" placeholder="Email" required className="rounded border p-2" />
      <input name="password" type="password" placeholder="Password" required className="rounded border p-2" />
      <button disabled={pending} className="rounded bg-emerald-600 p-2 text-white disabled:opacity-50">
        {pending ? "Logging in..." : "Log in"}
      </button>
      <Link href="/signup" className="text-sm underline">Create an account</Link>
    </form>
  );
}
