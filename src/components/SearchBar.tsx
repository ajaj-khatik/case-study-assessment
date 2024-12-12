import React from "react";

const SearchBar: React.FC<{ onSearch: (value: string) => void }> = ({
  onSearch,
}) => (
  <input
    type="text"
    placeholder="Search profiles..."
    onChange={(e) => onSearch(e.target.value)}
    className="w-60 mb-5 pl-10 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
  />
);

export default SearchBar;
