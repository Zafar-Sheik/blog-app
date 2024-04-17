import Link from "next/link";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between fixed w-full bg-slate-300 text-black font-semibold p-4">
        <div className="flex justify-evenly items-center space-x-12">
          <Link className="hover:font-bold" href="/">
            Home
          </Link>
          <Link className="hover:font-bold" href="/posts">
            Posts
          </Link>
        </div>
        <div className="flex justify-evenly items-center space-x-2">
          <Link href="/">
            <Image
              src="/profile-icon.png"
              width={50}
              height={50}
              alt="profile picture"
              priority
            />
          </Link>
          <Link className="hover:font-bold" href="/login">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};
