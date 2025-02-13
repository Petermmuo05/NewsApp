import React from "react";
import Userlayout from "../userlayout";

export default function page() {
  return (
    <Userlayout isNav={false}>
      <div className="w-full flex flex-col gap-10 py-6 px-10 max-sm:px-1 items-start"></div>
    </Userlayout>
  );
}
