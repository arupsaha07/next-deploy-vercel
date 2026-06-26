"use client"

import { signup } from "../auth/auth";
import { useActionState } from "react";

export function SignupForm() {
    const [state, action, pending] = useActionState(signup, undefined);
    return (
        <form action={action}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Name" />
            </div>
            {state?.errors?.name && (
                <p className="text-red-500">
                    {state.errors.name}
                </p>
            )}

            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Email" />
            </div>
            {state?.errors?.email && (
                <p className="text-red-500">
                    {state.errors.email}
                </p>
            )}
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
            </div>
            {state?.errors.password && (
                <p className="text-red-500">
                    {state.errors.password}
                </p>
            )}
            <button disabled={pending} type="submit">Sign Up</button>
        </form>
    )
}