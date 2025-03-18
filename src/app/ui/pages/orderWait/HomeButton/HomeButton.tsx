"use client";
import { trackingTtq } from "@/src/util/tracking";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import Cookies from "js-cookie";
import { trackingFbq } from "@/src/util/tracking";

export default function HomeButton() {
  const router = useRouter();
  const { lang } = useParams();
  const handleClick = () => {
    const id = Cookies.get("id") as string;
    trackingFbq("home_button", { userId: +id });
    trackingTtq("home_button", { userId: +id });
    router.push(`/${lang}`);
  };
  return (
    <div className="flex justify-center items-center">
      <button
        className="bg-primary text-white px-4 py-2 rounded-md"
        onClick={handleClick}
      >
        Home
      </button>
    </div>
  );
}
