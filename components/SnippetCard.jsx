"use client";

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Code from "@components/Code";

const SnippetCard = ({ snippet, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState(false);

  const handleProfileClick = () => {
    if (snippet.creator._id === session?.user.id)
      return router.push("/profile");

    router.push(
      `/profile/${snippet.creator._id}?name=${snippet.creator.username}`
    );
  };

  const handleCopy = async () => {
    // // - and this is how to read text from the clipboard
    // console.log(await navigator.clipboard.readText())

    setCopied(snippet.body);
    // - this is how to add some text to the clipboard
    navigator.clipboard.writeText(snippet.body);

    // - this is how to reset the state after a certain time has passed
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="relative rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter ">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <Image
            src={snippet.creator.image}
            alt="user image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {snippet.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {snippet.creator.email}
            </p>
          </div>
        </div>

        <div
          className="absolute right-[25px] top-[16px] w-7 h-7 rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex justify-center items-center cursor-pointer"
          onClick={handleCopy}
        >
          <Image
            src={copied ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
            alt={copied ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <Link href="/">
        <p className="my-4 h-36 overflow-hidden font-satoshi text-sm text-gray-700">
          {snippet.title}
        </p>
      </Link>
      {/* <p className="my-4 h-36 overflow-hidden font-satoshi text-sm text-gray-700">
        <Code lang="js" str={snippet.body} />
      </p> */}
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-1 bg-[#f0e0d0] px-3 overflow-hidden  rounded-2xl max-w-[60%]">
          {snippet.tags.map((tag) => (
            <p
              className="font-inter text-sm hover:text-primary-orange cursor-pointer"
              onClick={() => handleTagClick(snippet.tag)}
              key={uuidv4()}
            >
              #{tag}
            </p>
          ))}
        </div>
        {/* <div className=" bg-gray-300 px-3  rounded-2xl"> */}
        <div className=" bg-[#f0e0d0] px-3  rounded-2xl">
          <div className="bold uppercase">{snippet.language}</div>
        </div>
      </div>

      {session?.user.id === snippet.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex justify-start items-start gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default SnippetCard;
