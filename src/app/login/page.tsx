import React from "react";
import Userlayout from "../userlayout";
import SignInButton from "../components/signinbutton";

export default function SignIn() {
  return (
    <Userlayout isNav={false}>
      <div className="w-full h-[80vh] flex items-center justify-center">
        <SignInButton />{" "}
      </div>
    </Userlayout>
  );
}
