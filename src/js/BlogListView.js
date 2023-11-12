import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function BlogListView() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts.json")
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => console.err(err));
  }, []);

  return (
    <div className="">
      <h1>All Posts</h1>
      <ul>
        {posts.map((post, index) => {
          return (
            <li key={index}>
                <h2><Link to={'/posts/' + post.slug}>{post.title}</Link></h2>
                <p>{new Date(post.date).toDateString()}</p>
              <p>{post.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
