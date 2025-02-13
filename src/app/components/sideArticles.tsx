"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useApp } from "../../../lib/appcontext";

export default function SideArticles({ sortedArticles }) {
  const { userTab } = useApp();

  function timeAgo(dateString: string): string {
    const givenDate = new Date(dateString);
    const now = new Date();

    // Calculate the difference in milliseconds
    const diffInMs = now.getTime() - givenDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} week(s) ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} month(s) ago`;

    return `${Math.floor(diffInDays / 365)} year(s) ago`;
  }
  return (
    <div className="flex relative basis-[45%] max-sm:hidden  flex-col gap-2  rounded-xl ">
      {sortedArticles
        .filter((data) => {
          if (userTab)
            return data.category?.toLowerCase() === userTab?.toLowerCase();
          else return true;
        })
        .slice(5, 8)
        .map((data) => (
          <Link
            href={`/articles/${data.id}`}
            key={data.id}
            className="flex flex-row basis-1/3 min-h-[120px]"
          >
            <div className="h-full rounded-lg w-[120px] max-w-[120px] min-w-[120px] bg-black overflow-hidden relative ">
              <Image
                src={data.image_url}
                alt={data.title}
                fill
                className="absolute inset-0 w-[200px] h-full object-cover"
              />{" "}
            </div>
            <div className="flex flex-col justify-center  items-center">
              <div className="flex flex-col gap-2 p-3">
                <div className="text-[13px] trans-meal:text-[11px] max-lg:text-[10px]">
                  {data.App_Users.full_name} · {timeAgo(data.created_at)}
                </div>
                <div className="text-[17px] trans-meal:text-[15px] max-lg:text-[13px] font-bold">
                  {data.title}{" "}
                </div>
                <div className="text-[13px] trans-meal:text-[11px] text-red-500 max-lg:text-[10px]">
                  {data.category}
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
