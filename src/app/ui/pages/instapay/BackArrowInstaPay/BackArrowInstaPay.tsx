"use client";

import { BackArrowIcon } from "@/src/app/icons/icons";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function BackArrowInstaPay() {
  const route = useRouter();
  const t = useTranslations("Cards")

  return (
    <div
      onClick={() => route.back()}
      className="absolute ltr:left-0 rtl:right-0 top-0 cursor-pointer flex items-center gap-2"
    >
      <BackArrowIcon className="dark:fill-white rtl:-scale-100" />
      {t("back")}
    </div>
  );
}
