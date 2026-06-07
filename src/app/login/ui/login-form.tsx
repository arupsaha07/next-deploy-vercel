"use client"

import { login } from "@/src/app/login/auth/auth"
import { useActionState } from "react"

export function LoginForm() {

    const [state, action, pending] = useActionState(login, undefined)

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="w-full max-w-md">
                <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-foreground">Login to your Account</h1>
                        <p className="text-muted-foreground mt-2">Enter your details to get started</p>
                    </div>

                    <form action={action} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="email@email.com"
                                className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                            />
                            {state?.errors?.email && (
                                <p className="mt-1.5 text-sm text-error">{state.errors.email}</p>
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
                            {pending ? "Loading..." : "Login"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
