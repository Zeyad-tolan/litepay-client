"use client";

import { BackArrowIcon } from "@/src/app/icons/icons";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import SideBarDashboard from "../../SideBarDashboard";

export default function HeroCardDetails() {
  const route = useRouter();
  const t = useTranslations('dashboard')
  const { lang } = useParams()

  return (
    <div className="flex items-center gap-4 ">
      <SideBarDashboard />
      <div className="flex items-center gap-1 cursor-pointer" onClick={() => route.back()}>
        <BackArrowIcon className={`!text-black dark:!text-white ${lang === "en" ? "rotate-0" : "rotate-180"}`} />
        <p>
          {t('back')}
        </p>
      </div>
    </div>
  );
}
