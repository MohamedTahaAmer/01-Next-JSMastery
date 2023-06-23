"use client";

import Link from "next/link"; // - takes 'href' for navigation
import Image from "next/image"; // - https://github.com/MohamedTahaAmer/CodeMDs/blob/main/GPT/ImageNext.md
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders(); // - this will return all providers you are using like google, facebook, github, twitter ..etc
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex justify-between items-center w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 justify-start items-start">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain" // - even Image from next/image can have custom classnames
        />
        <p className="max-sm:hidden font-satoshi font-semibold text-lg text-black tracking-wide">
          Promptopia
        </p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link
              href="/create-prompt"
              className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
            >
              Create Post
            </Link>

            <Link href="/">
              <button
                type="button"
                onClick={signOut}
                className="rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center"
              >
                Sign Out
              </button>
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
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
                >
                  G-Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            {toggleDropdown && (
              <div
                className="fixed top-0 left-0 w-full h-full z-10 bg-stone-200 bg-opacity-50"
                onClick={() => setToggleDropdown(false)}
              ></div>
            )}

            <div className="relative z-20">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                onClick={() => setToggleDropdown((s) => !s)}
              />

              {toggleDropdown && (
                <div className="absolute  right-0 top-full mt-3 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end items-end">
                  <Link
                    href="/profile"
                    className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/create-prompt"
                    className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Create Prompt
                  </Link>
                  <Link href="/">
                    <button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                      className="mt-5 w-full rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
                    >
                      Sign Out
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
