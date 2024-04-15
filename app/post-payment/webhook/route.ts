// Handle payment confirmed webhook
export async function POST(request: Request) {
    console.log(request.headers);
    console.log(await request.json());

    if (request.headers.get("X-Notrix-Webhook-Key") != process.env.NOTRIX_WEBHOOK_KEY!){
        // Unverified source - discard
        return new Response("Unverified", {status: 401})
    }

    // TODO: Use Idiomatic header

    return new Response('Success!', {
        status: 200,
    });
}
