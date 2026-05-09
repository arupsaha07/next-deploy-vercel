import getAllProducts from "@/lib/getAllProducts";
import Image from "next/image";
import Link from "next/link";

export default async function Products() {
    const products = await getAllProducts();
    return (
        <>
            <div className="my-6">
                <h1 className="text-4xl font-bold text-gray-600 my-2">All Products</h1>
            </div>
            <ul className="grid grid-cols-3 gap-3">
                {
                    products.map((product: any) =>
                        <li className="border border-gray-300 rounded-md p-3" key={product.id}>
                            <Link href={`/products/${product.id}`}>
                                <Image
                                    src={product.images?.[0]}
                                    loading="lazy"
                                    alt="Product Image"
                                    width={300}
                                    height={300}
                                />
                                <h3 className="text-lg font-bold text-gray-600 my-2">{product.title}</h3>
                                <p className="text-gray-400 text-2xl">${product.price}</p>
                            </Link>

                        </li>)
                }
            </ul>
        </>
    )
}