import Snippet from "@models/snippet";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    // - this populate(creator) will replace the value of the creator key (user _Id) with the entire user document
    // - and this .find({}) is to fetch all the documents inside this collection
    const snippets = await Snippet.find({}).populate("creator");

    return new Response(JSON.stringify(snippets), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all snippets", { status: 500 });
  }
};
