"use client";

import { useState, useEffect } from "react";

import SnippetCard from "./SnippetCard";

const SnippetCardList = ({ data, handleTagClick }) => {
  return (
    // <div className="mt-16 py-8 flex flex-wrap gap-6 justify-center items-center">
    <div className="mt-16 py-8 grid gap-4 xl:grid-cols-3 md:grid-cols-2 ">
      {data.map((post) => (
        <SnippetCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/snippet");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterSnippets = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.snippet)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterSnippets(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterSnippets(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="mt-16 mx-auto w-full flex justify-center items-center flex-col gap-2">
      <form className="relative w-full md:w-2/3 flex justify-start items-start">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="block w-full rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0 peer"
        />
      </form>

      {/* All  Snippets */}
      {searchText ? (
        <SnippetCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <SnippetCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
