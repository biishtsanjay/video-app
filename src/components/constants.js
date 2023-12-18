import {
  HomeOutlined,
  PlayCircleOutlined,
  SubscriptionsOutlined,
  History,
  WatchLaterOutlined,
  SlowMotionVideo,
  FileDownloadOutlined,
  AccountCircle,
} from "@mui/icons-material";

const YOUTUBE_API_KEY = "AIzaSyBIdmtUDCOWnC2A0k2lSyixBGB1TnS-OiI";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 25;

export const sideNavCategories = [
  { icon: <HomeOutlined />, name: "Home" },
  { icon: <PlayCircleOutlined />, name: "Music" },
  { icon: <SubscriptionsOutlined />, name: "Subscription" },
  { icon: <History />, name: "History" },
  { icon: <WatchLaterOutlined />, name: "Watch Later" },
  { icon: <SlowMotionVideo />, name: "Shorts" },
  { icon: <FileDownloadOutlined />, name: "Downloads" },
];
export const sidenavSubscriptions = [
  { icon: <AccountCircle />, name: "Apple" },
  { icon: <AccountCircle />, name: "Tesla" },
  { icon: <AccountCircle />, name: "React" },
  { icon: <AccountCircle />, name: "TSeries" },
  { icon: <AccountCircle />, name: "MrBeast" },
  { icon: <AccountCircle />, name: "WWE" },
  { icon: <AccountCircle />, name: "PewDiePie" },
];
