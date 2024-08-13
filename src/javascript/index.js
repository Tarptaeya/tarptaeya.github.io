import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import AllPostsPage from './AllPostsPage';
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "post/:id",
    element: <PostPage />,
  },
    {
        path: "/all-posts",
        element: <AllPostsPage />
    },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
