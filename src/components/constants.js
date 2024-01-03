export const YOUTUBE_API_KEY = "AIzaSyBIdmtUDCOWnC2A0k2lSyixBGB1TnS-OiI";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 20;

// export const LIVE_STREAMS = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&eventType=live&type=video&part=snippet&maxResults=25`;

export const OFFSET_LIVE_CHAT = 25;
