import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { message } = await request.json();

        const response = await fetch(process.env.N8N_CHAT_WEBHOOK!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message,
            }),
        });

        const data = await response.json();
        console.log('new console --',data)

        return NextResponse.json({
            reply: data.reply,
        });
    } catch (error) {
        return NextResponse.json(
            {
                reply: "Something went wrong.",
            },
            { status: 500 }
        );
    }
}