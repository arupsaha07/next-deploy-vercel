import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            <p className="text-lg text-muted-foreground mt-4">The page you are looking for does not exist.</p>
        </div>
    );
}