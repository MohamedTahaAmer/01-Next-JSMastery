"use client";

import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SnippetCardList from "@components/SnippetCardList";

const Feed = () => {
  const [allSnippets, setAllSnippets] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/snippets");
      const snippets = await response.json();

      setAllSnippets(snippets);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterSnippets(tagName);
    setSearchedResults(searchResult);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // setSearchText(e.target.value)
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterSnippets(e.target.value);
        setSearchedResults(searchResult);
      }, 1)
    );
  };

  return (
    <section className="mt-10 mx-auto w-full flex justify-center items-center flex-col gap-2">
      <form
        onSubmit={handleFormSubmit}
        className="relative w-full md:w-2/3 flex justify-start items-start"
      >
        <SearchBar value={searchText} onChange={handleSearchChange} />
      </form>

      {/* All  Snippets */}
      {searchText ? (
        <SnippetCardList
          snippets={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <SnippetCardList
          snippets={allSnippets}
          handleTagClick={handleTagClick}
        />
      )}
    </section>
  );
};

export default Feed;
