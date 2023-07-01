import Snippet from "@models/snippet";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const snippet = await request.json();

  try {
    await connectToDB();
    const newSnippet = new Snippet(snippet);

    await newSnippet.save();
    return new Response(JSON.stringify(newSnippet), { status: 201 });
  } catch (error) {
    console.log(error.message)
    return new Response("Failed to create a new  snippet", { status: 500 });
  }
};
