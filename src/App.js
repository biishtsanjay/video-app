import { useState, lazy, Suspense } from "react";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import {
  LoginPageShimmer,
  SearchPageShimmer,
  WatchPageShimmer,
} from "./components/Shimmer";
import { LoginName, Loader } from "./utils/loadContext";

const WatchPage = lazy(() => import("./components/WatchPage"));
const SearchPage = lazy(() => import("./components/SearchPage"));
const LoginPage = lazy(() => import("./components/LoginPage"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Head />
        <Body />
      </div>
    ),
    children: [
      { path: "/", element: <MainContainer /> },
      {
        path: "/watch",
        element: (
          <Suspense fallback={<WatchPageShimmer />}>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "/search/:id",
        element: (
          <Suspense fallback={<SearchPageShimmer />}>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<LoginPageShimmer />}>
            <LoginPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  const [Loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  return (
    <Provider store={store}>
      <LoginName.Provider value={[name, setName]}>
        <Loader.Provider value={[Loading, setLoading]}>
          <RouterProvider router={appRouter} />
        </Loader.Provider>
      </LoginName.Provider>
    </Provider>
  );
}
export default App;
