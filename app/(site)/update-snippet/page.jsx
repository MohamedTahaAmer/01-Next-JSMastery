"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateSnippet = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const snippetId = searchParams.get("id");
  if (!snippetId) return <div>There is no Promot ID</div>;

  const [post, setPost] = useState({ snippet: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getSnippetDetails = async () => {
      const response = await fetch(`/api/snippets/${snippetId}`);
      const data = await response.json();

      setPost({
        snippet: data.snippet,
        tag: data.tag,
      });
    };

    if (snippetId) getSnippetDetails();
  }, [snippetId]);

  const updateSnippetHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/snippets/${snippetId}`, {
        method: "PATCH",
        body: JSON.stringify({
          snippet: post.snippet,
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
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateSnippetHandler}
    />
  );
};

export default UpdateSnippet;
