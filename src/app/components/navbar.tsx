import React from "react";
import MainMenu from "./mainmenu";
import Link from "next/link";
import { auth } from "../../../lib/auth";
import Image from "next/image";

export default async function Navbar({ isNav }: { isNav: boolean }) {
  const session = await auth();

  return (
    <div className="fixed justify-between bg-[#c09001] flex flex-row z-10 items-center px-3 top-0 left-0 w-full max-w-full h-fit py-1 ">
      <Link
        href={"/"}
        className="font-bold text-[25px] flex flex-row gap-1 max-sm:text-[23px] text-black"
      >
        <span className="text-white">AUI</span>
        <span>NewsHub</span>
      </Link>
      {/* {isNav && (
        <div className="flex self-end justify-self-center flex-row items-center gap-2 text-[12px] max-sm:text-[10px] ">
          <div className="flex items-center justify-center px-4 py-[6px] rounded-[25px] bg-[#a9aff7]">
            All
          </div>
          <div className="flex items-center justify-center px-4 py-[6px] rounded-[25px] bg-gray-300">
            Education
          </div>
          <div className="flex items-center justify-center px-4 py-[6px] rounded-[25px] bg-gray-300">
            Sports
          </div>
          <div className="flex items-center justify-center px-4 py-[6px] rounded-[25px] bg-gray-300">
            Social
          </div>
        </div>
      )} */}
      <div className="">
        <MainMenu session={session} />
      </div>
    </div>
  );
}
