import React from "react";
import Adminlayout from "../adminlayout";
import Formsection from "./formsection";
import { redirect } from "next/navigation";
import { auth } from "../../../../lib/auth";

export default async function Compose() {
    const session = await auth(); // Check for session
  
    if (!session) {
      redirect("/login"); // Redirect if no session
    }
  return (
    <Adminlayout>
      <div className="w-full flex flex-col gap-6 p-7 max-sm:p-5  text-[#58554c]">
      <div className="w-full">
          <p className="text-[35px] font-bold">Compose Article</p>
          <p className="text-[13px] text-[]">
            Write out what you want the world to know.
          </p>
        </div>
        <Formsection />
      </div>
    </Adminlayout>
  );
}
