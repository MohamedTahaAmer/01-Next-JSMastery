import { Schema, model, models } from "mongoose";

const SnippetSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  snippet: {
    type: String,
    required: [true, " Snippet is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Snippet = models.Snippet || model("Snippet", SnippetSchema);

export default Snippet;