import Link from "next/link"

export default function Blog() {
    const posts = [{
        id: 1,
        title: "post_1",
        description: "post desc 1"
    },
    {
        id: 2,
        title: "post_2",
        description: "post desc 3"
    }]
    return (
        <ul>
            {posts.map((post) => <li key={post.id}><Link href={`/blog/${post.id}`}>{post.title}</Link></li>)}
        </ul>
    )
}