"use client";

import Link from "next/link";
// - takes 'href' for navigation

import Image from "next/image";
// - https://github.com/MohamedTahaAmer/CodeMDs/blob/main/GPT/ImageNext.md

import { signOut, useSession } from "next-auth/react";
import SignIn from "./SignIn";

const Nav = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 justify-start items-start">
        <Image
          src="/assets/images/snippet.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain" // - even Image from next/image can have custom classnames
        />
        <p className="max-sm:hidden font-satoshi font-semibold text-lg text-black tracking-wide">
          Snippets
        </p>
      </Link>

      {/* Desktop Navigation */}
      <div className="flex">
        {session?.user ? (
          <div className="flex gap-2 md:gap-5">
            <Link
              href="/create-snippet"
              className="max-sm:px-2  rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
            >
              Add<span className="max-sm:hidden ml-1">Snippet</span>
              {/* {console.log(session)}
              {
                expires: "2023-07-29T05:53:48.674Z",
                user: {
                  email: "mohamedtahaaamer@gmail.com",
                  // this id is added manually in the route.js session callback
                  id: "649783213d4135a56f1f0e96",
                  image: "https://avatars.githubusercontent.com/u/58145820?v=4",
                  name: "Mohamed Taha",
                },
              } */}
            </Link>
            <Link
              href="/"
              type="button"
              onClick={signOut}
              className="max-sm:px-2 rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center font-bold"
            >
              Sign Out
            </Link>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <SignIn />
        )}
      </div>
    </nav>
  );
};

export default Nav;
