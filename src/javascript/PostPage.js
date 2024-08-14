import React from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import Footer from "./Footer";
import SideBar from "./SideBar";
import LatestPostList from "./LatestPostList";

export default function PostPage() {
  const { id } = useParams();
  return (
    <div className="page">
      <div className="main-container">
        <div className="post-page-container">
          <Post post={{ slug: id }} />
          <SideBar />
        </div>
        <LatestPostList postsToExclude={[id]} />
        <Footer />
      </div>
    </div>
  );
}
