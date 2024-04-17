import React from "react";
import Post from "../components/post";

const page = () => {
  const post = {
    id: 1,
    title: "My Post Title",
    author: "Sheikspear",
    content: "This is a sample of the post",
  };
  return (
    <>
      <div className="flex min-h-screen items-center flex-col justify-between p-24">
        <Post
          id={post.id}
          title={post.title}
          author={post.author}
          content={post.content}
        />
      </div>
    </>
  );
};

export default page;
