import React from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BlogListView from "./BlogListView";
import BlogPostView from './BlogPostView';


const router = createBrowserRouter([
    {
        path: '/',
        element: <BlogListView />,
    },
    {
        path: '/posts/:slug',
        element: <BlogPostView />
    },
]);


const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
