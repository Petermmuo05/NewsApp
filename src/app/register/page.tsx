import React from "react";
import Userlayout from "../userlayout";
import AuthForm from "../components/authform";

export default function Register() {
  return (
    <Userlayout isNav={false}>
      <AuthForm />
    </Userlayout>
  );
}
