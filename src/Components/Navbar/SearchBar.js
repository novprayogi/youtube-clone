import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${inputSearch}`);
    setInputSearch("");
  };
  return (
    <form className="relative" onSubmit={submitHandler}>
      <input
        type="text"
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
        value={inputSearch}
        className="outline-none p-2 rounded-full text-sm w-50 sm:w-80"
        style={{ borderWidth: "1px" }}
        placeholder="Search..."
      />
      <button type="submit">
        <MagnifyingGlassIcon className="text-grey-400 bg-white absolute h-6 top-1.5 right-3"></MagnifyingGlassIcon>
      </button>
    </form>
  );
};

export default SearchBar;
