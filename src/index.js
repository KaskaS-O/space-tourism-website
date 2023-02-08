import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/style.scss";

import Root, { loader as rootLoader } from "./routes/Root/Root";
import Home from "./routes/Home/Home";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import Destination from "./routes/Destination/Destination";
import Crew from "./routes/Crew/Crew";
import Technology from "./routes/Technology/Technology";
import DestArticle from "./components/DestArticle/DestArticle";
import CrewArticle from "./components/CrewArticle/CrewArticle";
import TechArticle from "./components/TechArticle/TechArticle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    // id: "root",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "destination",
        element: <Destination />,
        children: [
          { index: true, element: <DestArticle /> },
          { path: ":destName", element: <DestArticle /> },
        ],
      },
      {
        path: "crew",
        element: <Crew />,
        children: [
          { index: true, element: <CrewArticle /> },
          { path: ":crewName", element: <CrewArticle /> },
        ],
      },
      {
        path: "technology",
        element: <Technology />,
        children: [
          { index: true, element: <TechArticle /> },
          { path: ":techName", element: <TechArticle /> },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
