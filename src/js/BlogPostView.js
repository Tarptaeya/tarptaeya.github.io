import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPostView() {
    const [post, setPost] = useState({});
    const { slug } = useParams();

    useEffect(() => {
        fetch(`/${slug}.json`)
            .then(res => res.json())
            .then(res => setPost(res))
            .catch(err => console.err(err));
    }, [slug]);

    return (
        <div>
            <h1>{ post.title }</h1>
            <p>{ new Date(post.date).toDateString() }</p>
            <p dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
    );
}
