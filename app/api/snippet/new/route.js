import  Snippet from "@models/snippet";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId,  snippet, tag } = await request.json();

    try {
        await connectToDB();
        const newSnippet = new  Snippet({ creator: userId,  snippet, tag });

        await newSnippet.save();
        return new Response(JSON.stringify(new Snippet), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new  snippet", { status: 500 });
    }
}
