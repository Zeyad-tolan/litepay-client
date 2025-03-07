"use client";

import { linksSideBarDashboard } from "@/src/app/data/sideBarDashbord";
import { DashboardIcon } from "@/src/app/icons/icons";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LinkLocal from "../../../elements/LinkLocal";

export default function SideBarDashboard() {
  const t = useTranslations("dashboard")
  const [show, setShow] = useState<boolean>(false)
  const path = usePathname()

  return (
    <div className="h-full flex items-center relative">
      <DashboardIcon className="dark:fill-white cursor-pointer" onClick={() => setShow(true)} />
      {
        show &&
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/40 z-40" onClick={() => setShow(false)}></div>
      }
      <div className={`h-fit w-fit py-2 px-2 ${show ? "block" : "hidden"} absolute -top-5 ltr:-left-5 rtl:-right-5 z-50`}>
        <div className="w-full h-full p-3 bg-[#E8E8E8] dark:bg-primaryDark rounded-lg flex flex-col gap-8 transition-all duration-150">
          <div className="flex items-center gap-2 dark:text-white">
            <DashboardIcon className="dark:fill-white" />
            <p className="text-3xl font-medium text-nowrap">
              {t("dashboard")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {
              linksSideBarDashboard.map(({ Icon, link, title }, index) => {
                return (
                  <LinkLocal key={index} src={link} style={`grid grid-cols-8 gap-1 items-center justify-center ${path.includes(title) ? "text-primary" : "text-black dark:text-white"}`}>
                    <div className="col-span-1 flex justify-center items-center ">
                      <Icon className={`${path.includes(title) ? "fill-primary stroke-primary" : "dark:fill-white dark:stroke-white"}`} />
                    </div>
                    <p className="col-span-7">
                      {t(title)}
                    </p>
                  </LinkLocal>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
