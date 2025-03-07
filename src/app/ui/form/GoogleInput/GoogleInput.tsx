"use client";

import { googleAuth } from "@/src/api";
import { GoogleIcon, LineGoogleIcon } from "@/src/app/icons/icons";
import { useTranslations } from "next-intl";

export default function GoogleInput() {
  const t = useTranslations("Auth")

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 ">
      <div className="w-full overflow-hidden flex gap-4 items-center">
        <LineGoogleIcon />
        <p>
          {t("or")}
        </p>
        <LineGoogleIcon />
      </div>
      <div
        onClick={() => googleAuth()}
        className="border border-solid border-[#868685] w-full py-2 px-3 rounded-full flex items-center justify-center gap-2 cursor-pointer">
        <GoogleIcon />
        <p>
          {t("google")}
        </p>
      </div>
    </div>
  );
}
