import React from "react";
import Navbar from "./components/navbar";
import NextTopLoader from "nextjs-toploader";

export default function Userlayout({ children, isNav }) {
  return (
    <div
      className={`flex flex-col min-h-[100vh] pt-[56px] bg-white w-full items-start`}
    >
      {" "}
      <NextTopLoader color="#a9aff7" height={3} showSpinner={false} />
      <Navbar isNav={isNav} />
      {children}
    </div>
  );
}
