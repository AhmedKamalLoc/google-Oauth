"use client";

import { signIn } from "next-auth/react";

export function Login() {
  const handleClick = () => {
    signIn("google");
  };

  return <button onClick={handleClick}>Login with Google</button>;
}
