"use client";
import React from "react";
import { useApp } from "../../../lib/appcontext";
import Link from "next/link";
import Image from "next/image";
import SideArticles from "./sideArticles";
import { convert } from "html-to-text";

export default function Headline({ sortedArticles }) {
  const { userTab } = useApp();
  const filtered = sortedArticles.filter((data) => {
    if (userTab) return data.category?.toLowerCase() === userTab?.toLowerCase();
    else return true;
  });
  function extractPlainText(html: string): string {
    const text = convert(html, { wordwrap: false }).trim();
    return truncateText(text);
  }
  function truncateText(text: string | null, limit: number = 350): string {
    if (!text) return "";
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  }
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
    <div className="flex flex-row gap-6 max-800:gap-4 px-6 w-full h-[50vh] max-sm max-800:h-[56vh]">
      <Link
        href={`/articles/${filtered[0]?.id}`}
        className="relative flex items-end basis-[65%] max-sm:basis-[100%] bg-red-200 p-6 rounded-xl overflow-hidden"
      >
        {/* Background Image */}
        <Image
          src={filtered[0]?.image_url}
          alt={filtered[0]?.title}
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        {/* Content */}
        <div className="relative flex flex-col items-start w-[80%] text-white">
          <div className="text-[16px] max-800:text-[14px]">
            {filtered[0]?.App_Users.full_name} ·{" "}
            <span className="text-[15px] max-800:text-[13px]">
              {timeAgo(filtered[0]?.created_at)}
            </span>
          </div>
          <div className="text-[30px] font-bold max-800:text-[24px]">
            {filtered[0]?.title}
          </div>
          <div className="text-[14px] max-800:text-[11px]">
            {extractPlainText(filtered[0].content)}
          </div>
        </div>
      </Link>
      <SideArticles sortedArticles={sortedArticles} />
    </div>
  );
}
