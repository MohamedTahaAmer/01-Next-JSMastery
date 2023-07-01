import { Schema, model, models } from "mongoose";

const SnippetSchema = new Schema({
  // - this creator propery will link the snippets with the users by assigning the value of a user id to the creator of a snippet
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  body: {
    type: String,
    required: [true, " Snippet body is required."],
  },
  tags: {
    type: [String],
    required: [true, "Tags are required."],
  },
  title: {
    type: String,
    required: [true, "Snippet Title is required."],
  },
  dateModified: {
    type: Date
  },
  language: {
    type: String,
    required: [true, "Snippet Language is required."],
  },
});

const Snippet = models.Snippet || model("Snippet", SnippetSchema);

export default Snippet;
