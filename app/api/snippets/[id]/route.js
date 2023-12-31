import Snippet from "@models/snippet";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const snippet = await Snippet.findById(params.id).populate("creator");
    if (!snippet) return new Response("Snippet Not Found", { status: 404 });

    return new Response(JSON.stringify(snippet), { status: 200 });
  } catch (error) {
    if (error.path === "_id")
      return new Response("Snippet Not Found", { status: 404 });
    return new Response("Internal Server Error", { status: 500 });
  }
};

// - in the server side routs you get the params passed to the controlleres
export const PATCH = async (request, { params }) => {
  const { snippet, tag } = await request.json();

  try {
    await connectToDB();

    // Find the existing  snippet by ID
    const existingSnippet = await Snippet.findById(params.id);

    if (!existingSnippet) {
      return new Response(" Snippet not found", { status: 404 });
    }

    // Update the  snippet with new data
    existingSnippet.snippet = snippet;
    existingSnippet.tag = tag;

    await existingSnippet.save();

    return new Response("Successfully updated the  Snippets", { status: 200 });
  } catch (error) {
    return new Response("Error Updating  Snippet", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the  snippet by ID and remove it
    await Snippet.findByIdAndRemove(params.id);

    return new Response(" Snippet deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting  snippet", { status: 500 });
  }
};
