import React from "react";
import { Link } from "react-router-dom";

export default function PostList(props) {
  const { posts } = props;

  return (
    <div className="post-list-container">
      <ul>
        {posts.map((post, idx) => (
          <li key={idx}>
            <div className="post-list-item">
              <div className="post-list-item-title">
                <Link to={`/post/${post.slug}`}>{post.title}</Link>
              </div>
              <div className="post-list-item-description">
                {post.description}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
