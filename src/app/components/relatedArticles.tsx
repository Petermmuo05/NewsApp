"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useApp } from "../../../lib/appcontext";

export default function RelatedArticles({ sortedArticles }) {
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
    <div className="flex flex-row  gap-6 h-full justify-start w-full overflow-x-scroll scrollbar-hide">
      {sortedArticles
        .filter((data) => {
          if (userTab)
            return data.category?.toLowerCase() === userTab?.toLowerCase();
          else return true;
        })
        .slice(1, 5)
        .map((data) => (
          <Link
            href={`/articles/${data.id}`}
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
            <div className="relative flex flex-col justify-between h-full w-full">
              <div className="flex items-center justify-center px-3 py-1 rounded-[25px] max-lg:text-[12px] text-[15px] bg-[#a9aff7] text-white w-fit">
                {data.category}
              </div>
              <div className="flex flex-col items-start text-white">
                <div className="text-[12px] max-lg:text-[11px]">
                  {data.App_Users.full_name} · {timeAgo(data.created_at)}
                </div>
                <div className="text-[18px] max-lg:text-[16px] font-bold">
                  {data.title}
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
