"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [mySnippets, setMySnippets] = useState([]);




  useEffect(() => {
    const fetchSnippets = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/snippets`);
      const snippets = await response.json();

      setMySnippets(snippets);
    };

    if (session?.user.id) fetchSnippets();
  }, [session?.user.id]);

  const filterSnippets = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    const snip = allSnippets.filter(
      (item) =>
        regex.test(item.creator.username) ||
        item.tags.some((tag) => regex.test(tag)) ||
        regex.test(item.title) ||
        regex.test(item.language)
    );

    return snip;
  };

  const handleTagClick = (tag) => {
    console.log(tag)
    console.log('Expression 55')
    console.log(tag.slice(1))
    const searchResult = filterSnippets(tag.slice(1));
    setMySnippets(searchResult);
  };

  const handleEdit = (snippet) => {
    router.push(`/update-snippet?id=${snippet._id}`);
  };

  const handleDelete = async (snippet) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this  snippet?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/snippets/${snippet._id.toString()}`, {
          method: "DELETE",
        });

        const filteredSnippets = mySnippets.filter((item) => item._id !== snippet._id);

        setMySnippets(filteredSnippets);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page. Share your exceptional  snippets and inspire others with the power of your imagination"
      snippets={mySnippets}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      handleTagClick={handleTagClick}
    />
  );
};

export default MyProfile;
