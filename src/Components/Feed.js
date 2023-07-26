import React, { useState, useEffect } from "react";
import { FetchApi } from "../Utils/FetchApi";
import SideBar from "./Navbar/SideBar";
import Videos from "./Videos";

const Feed = () => {
  const [selectCategory, setSelectCategory] = useState("Tech");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    FetchApi(`search?part=snippet,id&q=${selectCategory}`).then((data) => setVideos(data.items));
  }, [selectCategory]);
  return (
    <div className=" flex flex-col sm:flex-row">
      <div className=" py-2 flex sm:flex-col sm:justify-start sm:basis-3/12 overflow-auto">
        <SideBar selectCategory={selectCategory} setCategory={setSelectCategory} setVideos={setVideos} />
      </div>
      <div className=" bg-gray-50 sm:basis-9/12 ">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
