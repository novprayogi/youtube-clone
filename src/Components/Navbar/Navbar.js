import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../Utils/Utilitys";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <div className="bg-white-300 py-1 flex w-screen justify-between px-4 items-center sticky top-0">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="h-10" />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
