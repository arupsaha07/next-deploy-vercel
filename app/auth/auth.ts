'use server'
import { FormState, SignupFormSchema } from "@/app/signup/definitions"
import bcrypt from "bcryptjs"
import { supabaseAdmin } from "@/lib/supabase/server"

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

    const { data: existingUser } = await supabaseAdmin
        .from('users')
        .select('id')
        .eq('email', email)
        .maybeSingle()

    if (existingUser) {
        return {
            errors: { email: ['Email already exists'] },
        }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const { error } = await supabaseAdmin
        .from('users')
        .insert({
            name,
            email,
            password: hashedPassword,
        })

    if (error) {
        return { message: error.message }
    }

    return { message: 'User created successfully' }
}