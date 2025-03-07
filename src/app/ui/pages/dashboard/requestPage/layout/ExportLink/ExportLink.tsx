"use client"
import { DownloadRequest } from "@/src/app/icons/icons";
import { useTranslations } from "next-intl";

export default function ExportLink() {
  const t = useTranslations('dashboard')
  return (
    <div className="">
      <button className="px-3 py-2 rounded-lg border border-[#B3B7BE] flex justify-between items-center gap-2">
        <DownloadRequest />
        <p>{t('export')}</p>
      </button>
    </div>
  );
}
