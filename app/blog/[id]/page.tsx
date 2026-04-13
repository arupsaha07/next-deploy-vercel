type PostDetailProps = {
    params: Promise<{
        id: number;
    }>;
};

export default async function PostDetail({ params }: PostDetailProps) {
    const { id } = (await params);

    return <div>the id is {id}</div>;
}
