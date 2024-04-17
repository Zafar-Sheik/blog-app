import React from "react";
import Image from "next/image";

const Post = ({ id, title, author, content }) => {
  return (
    <>
      <div className="rounded-3xl p-5 space-y-3 bg-slate-500 text-white hover:p-6 hover:bg-slate-600 cursor-pointer ">
        <Image
          className="rounded-3xl"
          src="/post-image.jpg"
          priority
          alt="Post Image"
          width={400}
          height={400}
        />

        <h1 className="text-2xl">{title}</h1>
        <h2>{author}</h2>
        <h3>{content}</h3>
      </div>
    </>
  );
};

export default Post;
