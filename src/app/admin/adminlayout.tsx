import React from "react";
import AdminNavbar from "../components/admin_navbar";
import NextTopLoader from "nextjs-toploader";

export default function Adminlayout({ children }) {
  return (
    <div
      className={`flex flex-col min-h-[100vh] pt-[56px] bg-white w-full items-start`}
    >
      <NextTopLoader color="white" height={3} showSpinner={false} />

      <AdminNavbar />
      {children}
    </div>
  );
}
