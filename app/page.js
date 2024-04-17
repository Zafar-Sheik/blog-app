"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState({
    id: Math.floor(Math.random() * 100),
    title: "",
    author: "",
    content: "",
  });

  const handleClick = () => {
    console.log(input);
    //send object to database
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <input
        className="w-70 rounded-3xl py-2 p-5 text-sm text-black placeholder:text-slate-400"
        type="text"
        placeholder="Title"
        onChange={(e) => setInput({ ...input, title: e.target.value })}
      />
      <input
        className="w-70 rounded-3xl py-2 p-5 text-sm text-black placeholder:text-slate-400"
        type="text"
        placeholder="Author"
        onChange={(e) => setInput({ ...input, author: e.target.value })}
      />
      <input
        className="w-70 rounded-3xl py-2 p-5 text-sm text-black placeholder:text-slate-400"
        type="text"
        placeholder="Content"
        onChange={(e) => setInput({ ...input, content: e.target.value })}
      />

      <button
        className="px-7 py-2 rounded-3xl font-medium bg-slate-400 text-black hover:bg-slate-500 hover:font-semibold hover:px-8 hover:py-3"
        onClick={handleClick}>
        Add Post
      </button>
    </div>
  );
}
