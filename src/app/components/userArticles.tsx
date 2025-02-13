"use client";
import React from "react";
import DeleteButton from "./deleteButton";
import Image from "next/image";
import { useApp } from "../../../lib/appcontext";
import Link from "next/link";

export default function UserArticles({ articleData }) {
  const { userTab } = useApp();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full   gap-3 mt-3">
      {articleData
        .filter((data) => {
          if (userTab)
            return data.category?.toLowerCase() === userTab?.toLowerCase();
          else return true;
        })
        .map((data) => (
          <div
            key={data.id}
            className="relative flex basis-[25%] h-full rounded-2xl bg-green-400 flex-col justify-between min-w-[220px] min-h-[180px] p-4 items-start overflow-hidden"
          >
            {/* Background Image */}

            <Image
              src={data.image_url}
              alt={data.title}
              fill
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* Content */}
            <Link
              href={`/articles/${data.id}`}
              className="relative flex flex-col justify-between h-full w-full"
            >
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center justify-center px-3 py-1 rounded-[25px] max-lg:text-[12px] text-[15px] bg-[#a9aff7] text-white w-fit">
                  {data.category}
                </div>
              </div>
              <div className="flex flex-col items-start text-white">
                <div className="text-[12px] max-lg:text-[11px]">
                  6 hours ago
                </div>
                <div className="text-[18px] max-lg:text-[16px] font-bold">
                  {data.title}
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
