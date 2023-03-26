import React, { useEffect, useState, useRef } from "react";
import { PostContainer } from "./style-Feed";
import Post from "../components/Post/Post";
import { timePassed } from "../assets/utils/helpers";

const API_URL = "https://dev.tedooo.com/hw/feed.json";

const Feed = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  const numberOfPosts = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${API_URL}?skip=${skip}`);
      const { data: data, hasMore: hasMoreData } = await response.json();

      setPosts((prevPosts) => [...prevPosts, ...data]);
      setHasMore(hasMoreData);
    };

    if (hasMore) {
      fetchPosts();
    }
  }, [skip, hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setSkip((prevSkip) => prevSkip + numberOfPosts);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore]);

  return (
    <PostContainer>
      {posts.map((user) => {
        return (
          <Post
            avatar={user.avatar}
            shopName={user.shopName}
            username={user.username}
            text={user.text}
            images={user.images}
            comments={user.comments}
            likes={user.likes}
            didLike={user.didLike}
            premium={user.premium}
            date={timePassed(user.date)}
            key={user.id}
          />
        );
      })}
      {hasMore && <div ref={loaderRef}>Loading...</div>}
    </PostContainer>
  );
};

export default Feed;
