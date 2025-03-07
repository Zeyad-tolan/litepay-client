/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { headerItems } from "@/src/app/data/headerItems";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function HeaderLinks() {
  const t = useTranslations("Navbar")
  const { lang } = useParams()
  
  const token = Cookies.get('token')


  const filteredHeaderItems = headerItems.filter((item) => {
    if(token){
      const { user }:any = jwtDecode(token as string);
      if(user.Role){
        if (user.Role.type === "owner" && item.title === "yourCard") {
          return false;
        }
        else if (user.Role.type !== "owner" && item.title === "dashboard") {
          return false;
        }
        else{
          return true
        }
      }
      else{
        if (item.title === "dashboard") {
          return false;
        }
        else{
          return true
        }
      }
    }
    else{
      if (item.title === "dashboard") {
        return false;
      }
      else{
        return true
      }
    }
  });

  return (
    <div className="hidden md:flex gap-8">
      {
        filteredHeaderItems.map(({ link, title }, index) => {
          return (
            <Link
              className="text-white font-medium"
              href={"/" + lang + link} key={index}>
              {t(title)}
            </Link>
          )
        })
      }
    </div>
  );
}
