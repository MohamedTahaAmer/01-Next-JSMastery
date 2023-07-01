import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <div className="bg-gray-100 flex w-full flex-col justify-center">
      <div className="relative w-full">
        <div className="overflow-hidden z-0 rounded-full relative p-1">
          <div className="relative flex z-50 bg-white rounded-full">
            <input
              value={value}
              onChange={onChange}
              type="text"
              placeholder="Search By Tag, UserName, Title or Language"
              className="rounded-full flex-1  px-6 py-2 text-black text-xl focus:outline-none"
            />
            <button
              className="bg-black text-white rounded-full font-semibold px-8 py-4 focus:outline-none hover:text-primary-orange"
            >
              Search
            </button>
          </div>
          <div className="glow glow-1 z-10 animate-glow1 bg-pink-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
          <div className="glow glow-2 z-20 animate-glow2 bg-purple-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
          <div className="glow glow-3 z-30 animate-glow3 bg-primary-orange rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
          <div className="glow glow-4 z-40 animate-glow4 bg-black rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
