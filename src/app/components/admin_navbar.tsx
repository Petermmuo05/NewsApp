import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo.png";
import MainMenu from "./mainmenu";
import Link from "next/link";
import AdminMenu from "./adminmenu";

export default function AdminNavbar() {
  return (
    <div className="fixed justify-between bg-blue-950 flex flex-row z-10 items-center px-3 top-0 left-0 w-full h-fit py-1 ">
      <div className="">
        <Link href={"/"} className="font-bold text-[25px]">
          NewsHub
        </Link>{" "}
      </div>
      {/* <div className="flex flex-row items-center gap-2 text-[12px] max-sm:text-[10px] ">
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
      </div> */}
      <AdminMenu/>
    </div>
  );
}
