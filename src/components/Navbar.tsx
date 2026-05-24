import Link from "next/link"
import { createClient } from "@/src/lib/supabase/server"


export default async function Navbar() {
    const supabase = await createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    return (
        <>
            {!user ? (

                <>
                    <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">Login</Link>

                    <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Sign Up</Link>
                </>

            ) : (
                <form action="/auth/signout" method="post">
                    <button type="submit">
                        Logout
                    </button>
                </form>
            )}
        </>
    )
}