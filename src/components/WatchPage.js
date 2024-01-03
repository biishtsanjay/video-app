/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import { SuggestShimmer } from "./Shimmer";
import SearchVideo from "./SearchVideo";
import { videoStore } from "../utils/videoSlice";
import { YOUTUBE_API_KEY } from "./constants";
import { Loader } from "../utils/loadContext";
import DetailVideo from "./DetailVideo";
import CommentsShow from "./CommentsShow";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [search] = useSearchParams();

  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [showcomments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [showLive, setShowLive] = useState(false);
  const [suggestVdos, setSuggestVdos] = useState([]);
  const [Loading, setLoading] = useContext(Loader);
  const [channelDetails, setChannelDetails] = useState([]);

  const videoCache = useSelector((store) => store.video);
  const searchName = useSelector((store) => store.chat.searchName);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const Theme = useSelector((store) => store.app.Theme);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  useEffect(() => {
    if (videoCache[search]) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setVideoDetails(videoCache[search]);
      setSuggestVdos(videoCache[search + "suggest"]);
      setComments(videoCache[search + "comments"]);
    } else {
      getVideoDetail();
    }

    if (searchName === "live") {
      setShowLive(true);
    }
  }, [search]);
  const getVideoDetail = async () => {
    setLoading(true);
    const videoDetails = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=snippet,statistics&id=${search.get(
        "v"
      )}`
    );

    const data = await videoDetails.json();
    // console.log(data);
    if (data.items) {
      const channelId = data?.items[0]?.snippet?.channelId;
      const id = data?.items[0]?.snippet?.localized?.title;
      // to fetch the channel details
      const channelDetails = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${YOUTUBE_API_KEY}&id=${channelId}`
      );

      const data1 = await channelDetails.json();
      setChannelDetails(data1.items);
      const finalData = data.items.concat(data1.items);
      setVideoDetails(finalData);
      dispatch(
        videoStore({
          [search]: finalData,
        })
      );

      const suggestVdos = await fetch(
        // `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet&type=video&maxResults=10&relatedToVideoId=${search.get("v")}`
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${id}%2023&key=${YOUTUBE_API_KEY}`
      );
      const data2 = await suggestVdos.json();
      const duplicate = data2?.items?.indexOf(
        data2.items.find((e) => {
          return e.id.videoId === search.get("v");
        })
      );
      data2.items.splice(duplicate, 1);
      setSuggestVdos(data2.items);
      dispatch(
        videoStore({
          [search + "suggest"]: data2.items,
        })
      );
    }
    if (data.items[0].snippet.liveBroadcastContent === "none") {
      const commentsDetails = await fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${search.get(
          "v"
        )}&key=${YOUTUBE_API_KEY}`
      );
      const commentsData = await commentsDetails.json();

      setComments(commentsData.items);
      setShowComments(true);
      dispatch(
        videoStore({
          [search + "comments"]: commentsData.items,
        })
      );
    } else {
      setShowComments(false);
      dispatch(
        videoStore({
          [search + "comments"]: [],
        })
      );
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      style={{ width: "100%" }}
      className={`flex pt-24 ml-4 ${!Theme && "bg-black text-white"}`}
    >
      <div
        className={`relative flex-grow  px-2 py-3 ${
          !isMenuOpen ? "ml-[4rem] " : "ml-[12rem]"
        }`}
      >
        <iframe
          style={{ width: "100%", height: "40vw", border: "none" }}
          src={`https://www.youtube.com/embed/${searchParams.get(
            "v"
          )}?autoplay=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <div>
          {videoDetails?.length && (
            <DetailVideo info={videoDetails} Theme={Theme} />
          )}
        </div>
        {showcomments && (
          <div>
            <p className="py-2 text-lg">{comments?.length} Comments</p>
            {comments?.length &&
              comments.map((data) => (
                <div>
                  <CommentsShow info={data} key={data.id} Theme={Theme} />
                </div>
              ))}
          </div>
        )}
      </div>
      <div className=" ">
        {showLive && (
          <div className="pl-[68rem] w-full pt-2 mr-1 pr-4">
            <LiveChat />
          </div>
        )}

        <div className="ml-4 mr-6 pt-2">
          {!suggestVdos?.length && <SuggestShimmer />}
          {suggestVdos?.map((suggest) => (
            <Link
              to={"/watch?v=" + suggest.id.videoId}
              key={suggest.id.videoId}
            >
              <SearchVideo info={suggest} flag={"X"} Theme={Theme} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
