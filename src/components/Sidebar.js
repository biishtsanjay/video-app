import { useSelector } from "react-redux";
import {
  AiOutlineHome,
  AiOutlineFlag,
  AiFillFire,
  AiOutlineFire,
} from "react-icons/ai";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { GiDiamondTrophy } from "react-icons/gi";
import { IoGameControllerSharp } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const SidebarVisibilty = ({ icons, visibilty, Theme }) => {
  return (
    <>
      {!icons && (
        <>
          <ul className="hover:cursor-pointer ml-2">
            <Link to="/?v=home">
              <li
                style={{ display: "flex", alignItems: "center" }}
                className={`p-1 m-2  hover:bg-gray-100 text-md  mr-5  ${
                  visibilty === "home" ? "bg-gray-100" : ""
                } ${
                  !Theme &&
                  visibilty !== "home" &&
                  "text-white hover:text-black"
                }`}
              >
                <AiOutlineHome
                  style={{
                    margin: "2px",
                  }}
                />
                <span className={`ml-2 p-1`}> Home</span>
              </li>
            </Link>
            <Link to="/?v=10">
              <li
                style={{ display: "flex", alignItems: "center" }}
                className={`p-1 m-2  hover:bg-gray-100 flex text-md mr-5 ${
                  visibilty === "10" ? "bg-gray-100" : ""
                } ${
                  !Theme && visibilty !== "10" && "text-white hover:text-black"
                }`}
              >
                <CgMusicNote
                  style={{
                    margin: "2px",
                  }}
                />
                <span className=" ml-2 p-1"> Music</span>
              </li>
            </Link>
            <Link to="/?v=1">
              <li
                style={{ display: "flex", alignItems: "center" }}
                className={`p-1 m-2  hover:bg-gray-100 flex text-md mr-5 ${
                  visibilty === "1" ? "bg-gray-100" : ""
                } ${
                  !Theme && visibilty !== "1" && "text-white hover:text-black"
                }`}
              >
                <FiFilm
                  style={{
                    margin: "2px",
                  }}
                />
                <span className=" ml-2 p-1"> Shorts</span>
              </li>
            </Link>
            <Link to="/?v=17">
              <li
                style={{ display: "flex", alignItems: "center" }}
                className={`p-1 m-2  hover:bg-gray-100 flex text-md mr-5 ${
                  visibilty === "17" ? "bg-gray-100" : ""
                } ${
                  !Theme && visibilty !== "17" && "text-white hover:text-black"
                }`}
              >
                <GiDiamondTrophy
                  style={{
                    margin: "2px",
                  }}
                />
                <span className=" ml-2 p-1"> Sports</span>
              </li>
            </Link>
            <Link to="/?v=20">
              <li
                style={{ display: "flex", alignItems: "center" }}
                className={`p-1 m-2  hover:bg-gray-100 flex text-md mr-5 ${
                  visibilty === "20" ? "bg-gray-100" : ""
                } ${
                  !Theme && visibilty !== "20" && "text-white hover:text-black"
                }`}
              >
                <IoGameControllerSharp
                  style={{
                    margin: "2px",
                  }}
                />
                <span className=" ml-2 p-1"> Gaming</span>
              </li>
            </Link>
            <Link to="/?v=24">
              <li
                style={{ display: "flex", alignItems: "center" }}
                className={`p-1 m-2  hover:bg-gray-100 flex text-md mr-5 ${
                  visibilty === "24" ? "bg-gray-100" : ""
                } ${
                  !Theme && visibilty !== "24" && "text-white hover:text-black"
                }`}
              >
                <AiOutlineFire
                  style={{
                    margin: "2px",
                  }}
                />
                <span className=" ml-2 p-1"> Entertainment</span>
              </li>
            </Link>
          </ul>
          <div className=" m-2 border border-b-gray-400 "></div>
          <ul className="ml-2">
            <li
              style={{ display: "flex", alignItems: "center" }}
              className={`p-1 m-2  hover:bg-gray-100 flex text-md mr-5  ${
                !Theme && "text-white hover:text-black"
              }`}
            >
              <FiSettings style={{ margin: "2px" }} />
              <span className="ml-2 p-1">Settings</span>
            </li>
            <li
              style={{ display: "flex", alignItems: "center" }}
              className={`p-1 w-48 m-2  hover:bg-gray-100 flex ${
                !Theme && "text-white hover:text-black"
              }`}
            >
              <AiOutlineFlag
                style={{
                  margin: "2px",
                }}
              />
              <span className="mt-[-6px] ml-2 p-1 ">Report history</span>
            </li>
          </ul>
        </>
      )}
      {icons === "X" && (
        <>
          <ul className="hover:cursor-pointer">
            <Link to="/?v=home">
              {" "}
              <li
                className={`p-1 m-2  hover:bg-gray-100 w-10 ${
                  visibilty === "home" ? "bg-gray-100" : ""
                } ${
                  !Theme &&
                  visibilty !== "home" &&
                  "text-white hover:text-black"
                }`}
              >
                <AiOutlineHome
                  style={{
                    margin: "2px",
                    fontSize: "25px",
                    marginLeft: "2px",
                  }}
                />
              </li>
            </Link>
            <Link to="/?v=10">
              <li
                className={`p-1 m-2  hover:bg-gray-100 w-10 ${
                  visibilty === "10" ? "bg-gray-100" : ""
                } ${
                  !Theme && visibilty !== "10" && "text-white hover:text-black"
                }`}
              >
                <CgMusicNote
                  style={{
                    margin: "2px",
                    fontSize: "25px",
                  }}
                />
              </li>
            </Link>
            <Link to="/?v=1">
              <li
                className={`p-1 m-2  hover:bg-gray-100 w-10 ${
                  visibilty === "1" ? "bg-gray-100" : ""
                } ${
                  !Theme && visibilty !== "1" && "text-white hover:text-black"
                }`}
              >
                <FiFilm
                  style={{
                    margin: "2px",
                    fontSize: "25px",
                  }}
                />
              </li>
            </Link>
            <Link to="/?v=17">
              <li
                className={`p-1 m-2  hover:bg-gray-100 w-10 ${
                  visibilty === "17" ? "bg-gray-100" : ""
                } ${
                  !Theme && visibilty !== "17" && "text-white hover:text-black"
                }`}
              >
                <GiDiamondTrophy
                  style={{
                    margin: "2px",
                    fontSize: "25px",
                  }}
                />
              </li>
            </Link>
            <Link to="/?v=20">
              <li
                className={`p-1 m-2  hover:bg-gray-100 w-10 ${
                  visibilty === "20" ? "bg-gray-100" : ""
                }${
                  !Theme && visibilty !== "20" && "text-white hover:text-black"
                }`}
              >
                <IoGameControllerSharp
                  style={{
                    margin: "2px",
                    fontSize: "25px",
                  }}
                />
              </li>
            </Link>
            <Link to="/?v=24">
              <li
                className={`p-1 m-2  hover:bg-gray-100 w-10 ${
                  visibilty === "24" ? "bg-gray-100" : ""
                }${
                  !Theme && visibilty !== "24"
                    ? "text-white hover:text-black"
                    : ""
                }`}
              >
                <AiFillFire
                  style={{
                    margin: "2px",
                    fontSize: "25px",
                  }}
                />
              </li>
            </Link>
          </ul>
          <div className="w-10 m-2 border border-b-gray-400 "></div>
          <ul className="">
            <li
              className={`p-1 py-3 m-2 hover: hover:bg-gray-100 w-10 ${
                !Theme && "text-white hover:text-black"
              }`}
            >
              <FiSettings
                style={{
                  margin: "2px",
                  fontSize: "25px",
                }}
              />
            </li>
            <li
              className={`p-1  m-2 hover: hover:bg-gray-100 flex w-10 ${
                !Theme && "text-white hover:text-black"
              }`}
            >
              <AiOutlineFlag
                style={{
                  margin: "2px",
                  fontSize: "25px",
                }}
              />
            </li>
          </ul>
        </>
      )}
    </>
  );
};
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const Theme = useSelector((store) => store.app.Theme);
  const location = useLocation();
  const [search] = useSearchParams();
  let search1 = search?.get("v");
  if (!search1) {
    search1 = "home";
  }

  return (
    <>
      {isMenuOpen && location?.pathname === "/watch" && (
        <div
          className={`w-48 mt-16 pt-8 shadow-sm fixed top-0 left-0  h-full overflow-y-auto transition-transform transform ${
            isMenuOpen ? "-translate-x-0" : "-translate-x-48"
          } ${!Theme ? "bg-black" : "bg-white"}`}
          style={{ zIndex: 1000, marginTop: "60px" }}
        >
          <SidebarVisibilty visibilty={search1} Theme={Theme} />
        </div>
      )}
      {isMenuOpen && location.pathname !== "/watch" && (
        <div
          className={`w-48 mt-8 shadow-sm transition-transform ${
            isMenuOpen ? "fixed top-16 left-0" : "-translate-x-48"
          }`}
        >
          <SidebarVisibilty visibilty={search1} Theme={Theme} />
        </div>
      )}

      {!isMenuOpen && location.pathname !== "/watch" && (
        <div className={`w-20 mt-24 ml-5 fixed`}>
          <SidebarVisibilty visibilty={search1} icons="X" Theme={Theme} />
        </div>
      )}
      {!isMenuOpen && location.pathname === "/watch" && (
        <div className={`w-20 mt-20 ml-2 fixed`}>
          <SidebarVisibilty visibilty={search1} icons="X" Theme={Theme} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
