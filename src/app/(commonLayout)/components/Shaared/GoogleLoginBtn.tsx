"use client";
import { signIn } from "next-auth/react";
import React from "react";

const GoogleLoginBtn = () => {
  return (
    <button
      className="bg-[#FA552F] btn btn-md text-white hover:bg-[#1E88E5] hover:text-white "
      onClick={() => {
        signIn("google", { callbackUrl: "/" });
      }}
    >
      Login With Google
    </button>
  );
};

export default GoogleLoginBtn;
