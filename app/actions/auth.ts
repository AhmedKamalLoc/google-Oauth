"use server";

import { signOut } from "@/app/auth.config";

export async function logout() {
  signOut();
}
