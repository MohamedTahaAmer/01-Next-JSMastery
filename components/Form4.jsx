'use client'
import React, { useReducer } from "react";

const initialState = {
  isPrivate: false,
  language: "",
  title: "",
  body: "",
  tags: ["", "", ""],
};

const reducer = (state, action) => {
  switch (action.type) {
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

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data handling here
    console.log("Form State:", state);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-blue-500"
            checked={state.isPrivate}
            onChange={handleTogglePrivate}
          />
          <span className="ml-2">Private</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Language</label>
        <select
          value={state.language}
          onChange={handleLanguageChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Language</option>
          {[
            "js",
            "html",
            "css",
            "jsx",
            "cpp",
            "python",
            "aspnet",
            "php",
            "sql",
            "csharp",
          ].map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Title</label>
        <textarea
          value={state.title}
          onChange={handleTitleChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Body</label>
        <textarea
          value={state.body}
          onChange={handleBodyChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Tags</label>
        {state.tags.map((tag, index) => (
          <textarea
            key={index}
            value={tag}
            onChange={(e) => handleTagChange(e, index)}
            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
          />
        ))}
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
