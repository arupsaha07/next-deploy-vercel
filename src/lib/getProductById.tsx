// Disable TLS verification for development (self-signed cert)
if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

export default async function getProductById(id: number) {
    console.log(id);
    const response: Response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }
    return response.json();
}