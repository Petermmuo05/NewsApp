"use client";
import React from "react";
import { useApp } from "../../../lib/appcontext";

export default function Title() {
  const { userTab } = useApp();
  function capitalizeFirstLetter(str: string): string {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <>
      <p className="text-[35px] font-bold">
        {userTab ? capitalizeFirstLetter(userTab) : "Recent"} News in AUI
      </p>
      <p className="text-[13px] text-[]">What's happening? </p>
    </>
  );
}
