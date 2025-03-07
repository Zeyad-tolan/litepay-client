"use client";
import { useTranslations } from "next-intl";

export default function UndoChangeButton() {
  const t = useTranslations("dashboard");
  return (
    <>
      <button type="reset" className="p-2 px-5 uppercase rounded-full bg-[#D0D0D0] dark:bg-gray-500">
        {t(`undo-change`)}
      </button>
    </>
  );
}
