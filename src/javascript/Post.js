import React, { useEffect, useState } from "react";
import axios from "axios";
import { marked } from "marked";

marked.use({
  gfm: true,
});

export default function Post(props) {
  const [post, setPost] = useState();

  useEffect(() => {
    (async () => {
      const resp = await axios.get(`/api/${props.post.slug}.json`);
      resp.data.content = marked.parse(resp.data.content);
      setPost(resp.data);
    })();
  }, [props.post]);

  if (!post) return null;

  return (
    <div className="post-container">
      <h1 className="post-title">{post.title}</h1>
      <div className="post-date">
      <p>{ post.published_at }</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="post-content"
      />
    </div>
  );
}
