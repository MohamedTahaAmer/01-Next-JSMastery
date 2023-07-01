import SnippetCardList from "./SnippetCardList";

const Profile = ({ name, desc, snippets, handleEdit, handleDelete, handleTagClick }) => {
  return (
    <section className="w-full">
      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left">
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {name} Profile
        </span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-left">
        {desc}
      </p>

      <SnippetCardList
        snippets={snippets}
        handleEdit={(snippet) => handleEdit(snippet)}
        handleDelete={(snippet) => handleDelete(snippet)}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Profile;
