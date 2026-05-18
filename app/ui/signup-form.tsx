"use client"

import { signup } from "../auth/auth";
import { useActionState } from "react";

export function SignupForm() {
    const [state, action, pending] = useActionState(signup, undefined);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
                        <p className="text-gray-500 mt-2">Enter your details to get started</p>
                    </div>

                    <form action={action} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200"
                            />
                            {state?.errors?.name && (
                                <p className="mt-1.5 text-sm text-red-500">
                                    {state.errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200"
                            />
                            {state?.errors?.email && (
                                <p className="mt-1.5 text-sm text-red-500">
                                    {state.errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200"
                            />
                            {state?.errors?.password && (
                                <p className="mt-1.5 text-sm text-red-500">
                                    {state.errors.password}
                                </p>
                            )}
                        </div>

                        <button
                            disabled={pending}
                            type="submit"
                            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {pending ? "Creating account..." : "Sign Up"}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}