import React, { useEffect, useState } from "react";
import axios from "axios";
import PostList from "./PostList";

export default function LatestPostList(props) {
  const [posts, setPosts] = useState([]);
    const postsToExclude = props.postsToExclude ?? [];

  useEffect(() => {
    (async function fetchData() {
      const resp = await axios.get("/api/posts_0.json");
        const posts = resp?.data?.posts ?? [];
      setPosts(posts.filter(p => !postsToExclude.includes(p.slug)));
    })();
  }, []);

  return (
    <div className="latest-post-list">
      <h3>Latest Posts</h3>
      <PostList posts={posts} />
    </div>
  );
}


