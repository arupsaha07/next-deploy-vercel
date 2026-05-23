"use server"

import { LoginFormSchema, FormState } from "../definitions"
import { createClient } from "@/src/lib/supabase/server"

export async function login(state: FormState, formData: FormData) {

    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { email, password } = validatedFields.data
    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        return {
            message: error.message,
        }
    }

    return {
        message: "Login successful",
    }
}