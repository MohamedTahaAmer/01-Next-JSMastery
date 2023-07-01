"use client";

import { useReducer, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";
import SignIn from "@components/SignIn";

const initialState = {
  isPrivate: false,
  language: "js",
  title: "",
  body: "",
  tags: ["", "", ""],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "TOGGLE_PRIVATE":
      return { ...state, isPrivate: !state.isPrivate };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_BODY":
      return { ...state, body: action.payload };
    case "SET_TAG":
      const { index, value } = action.payload;
      const updatedTags = [...state.tags];
      updatedTags[index] = value;
      return { ...state, tags: updatedTags };
    default:
      return state;
  }
};

const CreateSnippet = () => {
  const [snippet, dispatch] = useReducer(reducer, initialState);
  const [submitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  if (!session?.user)
    return (
      <>
        You must sign in to create a Snippet
        <SignIn />
      </>
    );

  const createSnippet = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/snippets/new", {
        method: "POST",
        body: JSON.stringify({
          ...snippet,
          dateModified: Date.now(),
          creator: session?.user.id
        }),
      });

      if (response.ok) {
        router.push("/");
      }
      console.log(snippet);
      dispatch({ type: "RESET" });
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      snippet={snippet}
      dispatch={dispatch}
      submitting={submitting}
      handleSubmit={createSnippet}
    />
  );
};

export default CreateSnippet;
