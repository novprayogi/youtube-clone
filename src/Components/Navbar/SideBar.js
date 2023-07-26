import React from "react";
import { categories } from "../../Utils/Utilitys";

const SideBar = ({ selectCategory, setCategory, setVideos }) => {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => {
              setCategory(category.name);
              setVideos([]);
            }}
            key={index}
            className="flex p-2 flex-row items-center sm:justify-start sm:py-3 sm:px-2"
            style={{
              backgroundColor: selectCategory === category.name ? "red" : "white",
              color: selectCategory === category.name ? "white" : "black",
            }}
          >
            <span className=" m-2">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        );
      })}
    </>
  );
};

export default SideBar;
