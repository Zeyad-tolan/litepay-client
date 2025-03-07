/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { redirect } from "next/navigation";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

export default function About() {
  const token = Cookies.get("token")
  const { user }:any = jwtDecode(token as string)
  return user.Role && user.Role.type === "owner" ? redirect("dashboard/requests/new-card") : redirect("/")
}