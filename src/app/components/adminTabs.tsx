"use client";
import React from "react";
import { useApp } from "../../../lib/appcontext";

export default function AdminTabs() {
  const { adminTab, setAdminTab } = useApp();

  return (
    <div className="flex flex-row items-center cursor-pointer gap-2 text-[12px] max-sm:text-[10px] ">
      <div
        onClick={() => setAdminTab(null)}
        className={`flex items-center justify-center cool-button px-4 py-[6px] rounded-[25px] ${
          !adminTab ? "bg-[#a9aff7] text-white" : "bg-gray-200 text-gray-400"
        } `}
      >
        All
      </div>
      <div
        onClick={() => setAdminTab("education")}
        className={`flex items-center justify-center cool-button px-4 py-[6px] rounded-[25px] ${
          adminTab?.toLowerCase() === "education"
            ? "bg-[#a9aff7] text-white"
            : "bg-gray-200 text-gray-400"
        } `}
      >
        Education
      </div>
      <div
        onClick={() => setAdminTab("sports")}
        className={`flex items-center justify-center cool-button px-4 py-[6px] rounded-[25px] ${
          adminTab?.toLowerCase() === "sports"
            ? "bg-[#a9aff7] text-white"
            : "bg-gray-200 text-gray-400"
        } `}
      >
        Sports
      </div>
      <div
        onClick={() => setAdminTab("social")}
        className={`flex items-center justify-center cool-button px-4 py-[6px] rounded-[25px] ${
          adminTab?.toLowerCase() === "social"
            ? "bg-[#a9aff7] text-white"
            : "bg-gray-200 text-gray-400"
        } `}
      >
        Social
      </div>
    </div>
  );
}
