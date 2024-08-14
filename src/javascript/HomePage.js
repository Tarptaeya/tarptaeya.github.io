import React, { useEffect, useState } from "react";
import axios from "axios";
import About from "./About";
import RepoCardList from "./RepoCardList";
import Footer from "./Footer";
import LatestPostList from "./LatestPostList";

export default function HomePage() {
  return (
    <div className="page">
      <div className="main-container">
        <About />
        <RepoCardList />
        <LatestPostList />
        <Footer />
      </div>
    </div>
  );
}
