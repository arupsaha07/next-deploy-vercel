'use server'

import { FormState, SignupFormSchema } from "@/src/app/signup/definitions"
import { createClient } from "@/src/lib/supabase/server"

export async function signup(state: FormState, formData: FormData) {
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, password } = validatedFields.data
    const supabase = await createClient()

    // Register user securely (not as admin)
    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
            },
        },
    })

    if (error) {
        return { message: error.message }
    }

    return { message: 'Signup successful! Please check your email to verify your account.' }
}