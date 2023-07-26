import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchApi } from "../Utils/FetchApi";
import ReactPlayer from "react-player";
import VideoCard from "./VideoCard";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videoSuggest, setVideoSuggest] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    // get detail video api
    FetchApi(`videos?part=contentDetails,snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]));
    // get suggest video api
    FetchApi(`search?relatedToVideoId=${id}&part=id,snippet&type=video`).then((data) => setVideoSuggest(data.items));
  }, [id]);
  console.log(videoSuggest);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="grow md:basis-9/12 lg:basis-8/12">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="h-full" width="100%" />
        <div className="p-4">
          <h1 className="text-lg font-medium">{videoDetail?.snippet.title}</h1>
          <p className="mb-4">{videoDetail?.statistics.viewCount} views</p>
          <hr />
          <p className="mt-4 mb-4">{videoDetail?.snippet.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 p-2 md:basis-3/12 lg:basis-4/12 md:p-3">
        {videoSuggest?.map((video, index) => {
          return <VideoCard key={index} video={video} />;
        })}
      </div>
    </div>
  );
};

export default VideoDetail;
