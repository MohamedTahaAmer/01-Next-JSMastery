"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

// - in the client side routes, you get the params passed to the component
const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();

  // - this is how to get the user's query params
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/snippets`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional  snippets and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;
