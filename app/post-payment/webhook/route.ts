// Handle payment confirmed webhook
export async function POST(request: Request) {
    console.log(request.headers);
    console.log(await request.json());

    // TODO: verify notrix header AND use Idiomatic header

    return new Response('Success!', {
        status: 200,
    });
}
