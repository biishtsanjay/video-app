/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API, YOUTUBE_API_KEY } from "./constants";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { videoStore } from "../utils/videoSlice";
import { Shimmer } from "./Shimmer";
import { addLoginName, addName } from "../utils/chatSlice";
import { Loader } from "../utils/loadContext";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const Theme = useSelector((store) => store.app.Theme);
  const [Loading, setLoading] = useContext(Loader);

  const [search] = useSearchParams();
  let search1 = search?.get("v");

  const videoCache = useSelector((store) => store.video);

  dispatch(addLoginName(""));
  useEffect(() => {
    if (videoCache[search1]) {
      setVideos(videoCache[search1]);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      if (!search1) {
        search1 = "home";
      }
      getVideos(search1);
    }

    dispatch(addName(search1));
  }, [search1]);

  const getVideos = async (id) => {
    setLoading(true);
    let vdos;
    const api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${id}&key=${YOUTUBE_API_KEY}`;
    if (id === "home") {
      vdos = await fetch(YOUTUBE_VIDEO_API);
    } else {
      vdos = await fetch(api);
    }

    const data = id === "live" ? await vdos : await vdos?.json();

    console.log(data.items);
    setVideos(data?.items);

    dispatch(
      videoStore({
        [search1]: data?.items,
      })
    );
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      className={`flex flex-wrap cursor-pointer ${
        isMenuOpen ? "ml-[12rem]" : "ml-[5rem]"
      } ${!Theme ? " text-white " : ""}`}
    >
      {!videos.length && <Shimmer />}
      {videos?.map((e) => {
        return (
          <Link to={"/watch?v=" + e.id} key={e.id}>
            <VideoCard info={e} live={search1} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
