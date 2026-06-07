"use client"

import { signup } from "@/src/app/signup/auth/auth";
import Link from "next/link";
import { useActionState } from "react";

export function SignupForm() {
    const [state, action, pending] = useActionState(signup, undefined);
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="w-full max-w-md">
                <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
                        <p className="text-muted-foreground mt-2">Enter your details to get started</p>
                    </div>

                    <form action={action} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                            />
                            {state?.errors?.name && (
                                <p className="mt-1.5 text-sm text-error">
                                    {state.errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                            />
                            {state?.errors?.email && (
                                <p className="mt-1.5 text-sm text-error">
                                    {state.errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1.5">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                            />
                            {state?.errors?.password && (
                                <p className="mt-1.5 text-sm text-error">
                                    {state.errors.password}
                                </p>
                            )}
                        </div>

                        {state?.message && (
                            <p className="mt-1.5 text-sm text-muted-foreground">
                                {state.message}
                            </p>
                        )}

                        <button
                            disabled={pending}
                            type="submit"
                            className="w-full py-3 px-4 gradient-bg text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {pending ? "Creating account..." : "Sign Up"}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary hover:opacity-80 font-medium">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
