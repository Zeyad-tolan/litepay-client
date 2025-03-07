"use client";

import { followUsData } from "@/src/app/data/followUsData";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SocialMediaLinks() {
  const route = usePathname()
  return (
    <div className={`sticky ${route.includes("card-req") || route.includes("/dashboard/") ? "hidden" : "flex"} dark:bg-se md:flex-col flex-row gap-2 items-center md:top-1/2 md:bottom-auto md:-translate-y-1/2 bottom-4 ${route.includes("/dashboard/") ? "-z-10" : "z-20"}
      md:ltr:left-4 md:ltr:translate-x-0 md:rtl:right-4 md:rtl:translate-x-0 ltr:left-1/2 ltr:-translate-x-1/2 rtl:right-1/2 rtl:translate-x-1/2 w-fit h-fit`}>
      {
        followUsData.map(({ Icon, title, url }, index) => {
          return (
            <Link
              key={index}
              href={url}
              title={title}
              className="w-11 h-11 rounded-full bg-secondary dark:bg-thirdDark flex justify-center items-center transition-all duration-300"
            >
              <Icon width={22} height={22} className="fill-white dark:fill-primaryDark transition-all duration-300" />
            </Link>
          )
        })
      }
    </div>
  );
}

