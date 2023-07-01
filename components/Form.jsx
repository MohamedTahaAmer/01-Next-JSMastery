"use client";
import Link from "next/link";

const Form = ({ type, snippet, dispatch, submitting, handleSubmit }) => {
  const languages = {
    JavaScript: "js",
    HTML: "html",
    CSS: "css",
    "C++": "cpp",
    Python: "python",
    "ASP.NET": "aspnet",
    PHP: "php",
    SQL: "sql",
    "C#": "csharp",
  };
  const handleTogglePrivate = () => {
    dispatch({ type: "TOGGLE_PRIVATE" });
  };

  const handleLanguageChange = (e) => {
    dispatch({ type: "SET_LANGUAGE", payload: e.target.value });
  };

  const handleTitleChange = (e) => {
    dispatch({ type: "SET_TITLE", payload: e.target.value });
  };

  const handleBodyChange = (e) => {
    dispatch({ type: "SET_BODY", payload: e.target.value });
  };

  const handleTagChange = (e, index) => {
    dispatch({ type: "SET_TAG", payload: { index, value: e.target.value } });
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left">
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {type} Post
        </span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl text-left max-w-md">
        {type} and share amazing snippets with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5"
      >
        <div className="flex justify-center items-center gap-6">
          <div className="mb-4 basis-2/3">
            <label className="block mb-2 font-bold">Language</label>
            <select
              value={snippet.language}
              onChange={handleLanguageChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {Object.keys(languages).map((lang) => (
                <option key={lang} value={languages[lang]}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4 basis-1/3">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                checked={snippet.isPrivate}
                onChange={handleTogglePrivate}
              />
              <span className="ml-2">Private</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold">Title</label>
          <textarea
            value={snippet.title}
            onChange={handleTitleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Body</label>
          <textarea
            value={snippet.body}
            onChange={handleBodyChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="mb-2 font-bold">Tags</label>
          <div className="mb-4 flex items-center justify-center gap-2">
            {snippet.tags.map((tag, index) => (
              <textarea
                key={index}
                value={tag}
                onChange={(e) => handleTagChange(e, index)}
                className="w-full flex mt-2 p-3 text-sm text-gray-500 outline-0  border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end items-center mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
