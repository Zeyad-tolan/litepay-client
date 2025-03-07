"use client"
import LinkLocal from "@/src/app/ui/elements/LinkLocal";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import RefreshButton from "../../../RefreshButton";
import SideBarDashboard from "../../../SideBarDashboard";

export default function HeaderLinksRequest() {
  const url = usePathname()
  const t = useTranslations('dashboard')
  return (
    <div className="flex pb-3 border-b border-solid border-[#E4E6E8] justify-between items-end">
      <div className="flex gap-6 items-center">
        <SideBarDashboard />
        <LinkLocal src={`dashboard/requests/recharge-card?pageNo=1`} style={`font-medium relative ${url.includes("recharge-card") ? "text-[#00CC66] after:w-full after:h-[3px] after:bg-[#00CC66] after:absolute after:left-0 after:-bottom-3" : "text-[#1A1B23] dark:text-white"}`}>
          {t('recharge-card')}
        </LinkLocal>
        <LinkLocal src={`dashboard/requests/new-card?pageNo=1`} style={`font-medium relative ${url.includes("new-card") ? "text-[#00CC66] after:w-full after:h-[3px] after:bg-[#00CC66] after:absolute after:left-0 after:-bottom-3" : "text-[#1A1B23] dark:text-white"}`}>
          {t('new-card')}
        </LinkLocal>
        <LinkLocal src={`dashboard/requests/refunds?pageNo=1`} style={`font-medium relative ${url.includes("refunds") ? "text-[#00CC66] after:w-full after:h-[3px] after:bg-[#00CC66] after:absolute after:left-0 after:-bottom-3" : "text-[#1A1B23] dark:text-white"}`}>
          {t('refunds')}
        </LinkLocal>
      </div>
      <RefreshButton />
    </div>
  );
}
