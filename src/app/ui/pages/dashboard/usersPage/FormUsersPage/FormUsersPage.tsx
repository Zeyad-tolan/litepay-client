"use client";
import { useTranslations } from "next-intl";
import ExportLink from "../../requestPage/layout/ExportLink";
import HeaderCalender from "../../requestPage/layout/HeaderCalender";
import HeaderSearch from "../../requestPage/layout/HeaderSearch";
import SideBarDashboard from "../../SideBarDashboard";
import { useFilters } from "@/src/hooks/FiltersHook";

export default function FormUsersPage() {
  const t = useTranslations("dashboard");
  const addFilter = useFilters();
  return (
    <form className="flex items-end gap-3 py-3">
      <SideBarDashboard />
      <HeaderSearch />
      {/* <HeaderCalender /> */}
      <div className="min-w-[150px]">
        <label htmlFor="method" className="block mb-1">
          {t("premium-basic")}
        </label>
        <div className="px-3 py-2 rounded-lg border border-[#B3B7BE] flex justify-between items-center gap-2">
          <select
            name="role"
            onChange={(e) =>
              addFilter(
                e.target.name,
                e.target.value === "all" ? "" : e.target.value
              )
            }
            id="method"
            className="w-full bg-white text-black dark:bg-primaryDark dark:text-white outline-none placeholder:text-black"
          >
            <option
              value="all"
              className="bg-white text-black dark:bg-primaryDark dark:text-white"
            >
              {t("all")}
            </option>
            <option
              value="vip"
              className="bg-white text-black dark:bg-primaryDark dark:text-white"
            >
              {t("premium")}
            </option>
            <option
              value="user"
              className="bg-white text-black dark:bg-primaryDark dark:text-white"
            >
              {t("basic")}
            </option>
          </select>
        </div>
      </div>
      <ExportLink />
    </form>
  );
}
