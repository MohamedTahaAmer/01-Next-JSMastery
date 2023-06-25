"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";
import SignIn from "@components/SignIn";

const CreateSnippet = () => {
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ snippet: "", tag: "" });
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
      const response = await fetch("/api/snippet/new", {
        method: "POST",
        body: JSON.stringify({
          snippet: post.snippet,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createSnippet}
    />
  );
};

export default CreateSnippet;
