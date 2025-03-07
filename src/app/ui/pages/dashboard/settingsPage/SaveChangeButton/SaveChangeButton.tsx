"use client"
import { useTranslations } from "next-intl";

export default function SaveChangeButton() {
  const t = useTranslations("dashboard");
  return (
    <>
      <button type="submit" className="p-2 px-5 uppercase rounded-full bg-[#00CC66]">
        {t(`save-changes`)}
      </button>
    </>
  );
}
