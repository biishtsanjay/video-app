/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { ImYoutube2 } from "react-icons/im";
import { LoginName } from "../utils/loadContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [name, setName] = useContext(LoginName);
  const navTo = useSelector((store) => store.chat.LoginToPage);
  const Theme = useSelector((store) => store.app.Theme);
  const navigate = useNavigate();
  return (
    <div
      className={`min-h-screen flex items-center justify-center w-full ${
        !Theme ? "bg-gray-700" : "bg-gray-100"
      }`}
    >
      <div
        className={`${!Theme ? "bg-gray-900" : "bg-white"} w-96 p-8  shadow-lg`}
      >
        <div>
          <a href="/" className="flex justify-center">
            <ImYoutube2 className="text-red-500 text-8xl " />
          </a>
        </div>

        <form
          className="text-center"
          onSubmit={(e) => {
            e.preventDefault();

            if (!text && !password) {
              setErrorPassword(true);
              setErrorName(true);
            } else if (!text) {
              setErrorName(true);
            } else if (!password) {
              setErrorPassword(true);
            } else {
              setName(text);
              !navTo ? navigate("/") : navigate(`/watch?v=${navTo}`);
            }
          }}
        >
          <div className="space-y-4 text-left">
            <input
              type="text"
              value={text}
              onFocus={() => setErrorName(false)}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className={`w-full px-4 py-2  border ${
                !Theme ? "bg-gray-300" : "bg-gray-100"
              }  focus:outline-none focus:ring focus:border-blue-300`}
              placeholder="Name"
            />
            {errorName && (
              <span className="text-red-500">Please enter name!</span>
            )}
            <input
              type="password"
              onFocus={() => setErrorPassword(false)}
              value={password}
              className={`w-full px-4 py-2  border ${
                !Theme ? "bg-gray-300" : "bg-gray-100"
              }  focus:outline-none focus:ring focus:border-blue-300`}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorPassword && (
              <span className="text-red-500">Please enter password!</span>
            )}
          </div>

          <button
            type="submit"
            className="bg-black text-white hover:bg-red-600 px-4 py-2  mt-4 inline-block"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
