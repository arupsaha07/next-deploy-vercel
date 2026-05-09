import getProductById from "@/lib/getProductById";
import Image from "next/image";

export default async function Product({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const product = await getProductById(id);
    return (
        <div className="my-6">
            <h1 className="text-4xl font-bold text-gray-600 my-2">{product.title}</h1>
            <Image
                src={product.images?.[0]}
                loading="eager"
                alt="Product Image"
                width={300}
                height={300}
            />
            <p className="text-gray-400 text-2xl">${product.price}</p>
        </div>
    )
}