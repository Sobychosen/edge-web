"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signup } from "../login/actions";

export default function SignupPage() {
  const [state, formAction, pending] = useActionState(signup, null);

  return (
    <form action={formAction} className="mx-auto mt-24 flex max-w-sm flex-col gap-3 px-4">
      <h1 className="text-2xl font-semibold">Create your Edge account</h1>
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
      <input name="full_name" type="text" placeholder="Full name" required className="rounded border p-2" />
      <input name="email" type="email" placeholder="Email" required className="rounded border p-2" />
      <input name="password" type="password" placeholder="Password (min 6 characters)" minLength={6} required className="rounded border p-2" />
      <button disabled={pending} className="rounded bg-emerald-600 p-2 text-white disabled:opacity-50">
        {pending ? "Creating account..." : "Sign up"}
      </button>
      <Link href="/login" className="text-sm underline">I already have an account</Link>
    </form>
  );
}
