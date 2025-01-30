"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";

const GoogleLoginBtn = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  return (
    <button
      className="bg-[#FA552F] btn btn-md text-white hover:bg-[#1E88E5] hover:text-white "
      onClick={() => {
        signIn("google", { callbackUrl: redirect ? redirect : "/" });
      }}
    >
      Login With Google
    </button>
  );
};

export default GoogleLoginBtn;
