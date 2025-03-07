"use client"

import { useTranslations } from "next-intl";
import ExportLink from "../../requestPage/layout/ExportLink";
import HeaderCalender from "../../requestPage/layout/HeaderCalender";
import HeaderSearch from "../../requestPage/layout/HeaderSearch";
import SideBarDashboard from "../../SideBarDashboard";
import RefreshButton from "../../RefreshButton";
import { useFilters } from "@/src/hooks/FiltersHook";

export default function FormLogsPage() {
  const t = useTranslations('dashboard')
  const addFilter = useFilters()
  return (
    <div className="">
      <form className="flex items-end gap-3 py-3">
        <SideBarDashboard />
        <HeaderSearch />
        <HeaderCalender />
        <div className="min-w-[100px]">
          <label htmlFor="Status" className="block mb-1">{t('states')}</label>
          <div className="px-3 py-2 rounded-lg border border-[#B3B7BE] flex justify-between items-center gap-2">
            <select name="status" onChange={(e) => addFilter(e.target.name,e.target.value)} id="Status" className="w-full bg-white text-black dark:bg-primaryDark dark:text-white outline-none placeholder:text-black">
              <option value="all" className="bg-white text-black dark:bg-primaryDark dark:text-white">{t('all')}</option>
              <option value="Pending" className="bg-white text-black dark:bg-primaryDark dark:text-white">{t('pending')}</option>
              <option value="Succeeded" className="bg-white text-black dark:bg-primaryDark dark:text-white">{t('succeeded')}</option>
              <option value="Declined" className="bg-white text-black dark:bg-primaryDark dark:text-white">{t('declined')}</option>
            </select>
          </div>
        </div>
        <ExportLink />
        <RefreshButton />
      </form>
    </div>
  );
}
