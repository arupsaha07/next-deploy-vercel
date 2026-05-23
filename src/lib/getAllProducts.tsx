// Disable TLS verification for development (self-signed cert)
if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

export default async function getAllProducts() {
    const response: Response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    return response.json();
}

