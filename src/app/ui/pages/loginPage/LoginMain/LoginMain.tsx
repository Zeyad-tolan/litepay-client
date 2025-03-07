/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useParams, useSearchParams } from "next/navigation";
import LoginComponent from "../LoginComponent";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { sendGTMEvent } from "@next/third-parties/google";
import { trackingFbq, trackingTtq } from "@/src/util/tracking";

export default function LoginMain() {
  const search = useSearchParams()
  const token = search.get("token")
  const { lang } = useParams()
  useEffect(() => {
    if (token) {
      Cookies.set("token", token,{expires: 1,path:"/",sameSite:"lax",secure:process.env.NODE_ENV === "production"})
      const { user }:any = jwtDecode(token);
      Cookies.set('id', `${user.id}`,{expires: 1,path:"/",sameSite:"lax",secure:process.env.NODE_ENV === "production"})
      sendGTMEvent({ event: 'login-with-google', value: user.email });
      trackingFbq("login-with-google", {email: user.email})
      trackingTtq("login-with-google", {email: user.email})
      window.location.replace(`/${lang}/card-dashboard`);
    }
  }, [token,lang])
  return (
    <>
      {
        !token ? <LoginComponent />
        : null
      }
    </>
  );
}
