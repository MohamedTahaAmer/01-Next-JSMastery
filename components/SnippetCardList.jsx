"use client";
import SnippetCard from "./SnippetCard";

const SnippetCardList = ({
  snippets,
  handleTagClick,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className="mt-12 grid gap-4 xl:grid-cols-3 md:grid-cols-2 mb-16">
      {snippets?.map((snippet) => (
        <SnippetCard
          key={snippet._id}
          snippet={snippet}
          handleTagClick={handleTagClick}
          handleEdit={() => handleEdit(snippet)}
          handleDelete={() => handleDelete(snippet)}
        />
      ))}
    </div>
  );
};

export default SnippetCardList;
