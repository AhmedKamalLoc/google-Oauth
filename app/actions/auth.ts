"use server";

import { signOut } from "@/app/api/auth/[...nextauth]/route";

export async function logout() {
  signOut();
}
