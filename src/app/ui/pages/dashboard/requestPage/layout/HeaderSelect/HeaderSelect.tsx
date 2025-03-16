/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useFilters } from "@/src/hooks/FiltersHook";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function HeaderSelect() {
  const t = useTranslations("dashboard");
  const search = useSearchParams();
  const addFilter = useFilters();
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    addFilter(e.target.name, e.target.value === "all" ? "" : e.target.value);
  };
  return (
    <>
      <div className="min-w-[100px]">
        <label htmlFor="method" className="block mb-1">
          {t("methods")}
        </label>
        <div className="px-3 py-2 rounded-lg border border-[#B3B7BE] flex justify-between items-center gap-2">
          <select
            name="method"
            onChange={handleSelect}
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
              value="instapay"
              className="bg-white text-black dark:bg-primaryDark dark:text-white"
            >
              {t("instapay")}
            </option>
            <option
              value="vodafone"
              className="bg-white text-black dark:bg-primaryDark dark:text-white"
            >
              {t("vodafone")}
            </option>
          </select>
        </div>
      </div>
      <div className="min-w-[100px]">
        <label htmlFor="Status" className="block mb-1">
          {t("states")}
        </label>
        <div className="px-3 py-2 rounded-lg border border-[#B3B7BE] flex justify-between items-center gap-2">
          <select
            name="status"
            defaultValue={"all"}
            onChange={handleSelect}
            id="Status"
            className="w-full bg-white text-black dark:bg-primaryDark dark:text-white outline-none placeholder:text-black"
          >
            <option
              value="all"
              className="bg-white text-black dark:bg-primaryDark dark:text-white"
            >
              {t("all")}
            </option>
            <option
              value="pending"
              className="bg-white text-black dark:bg-primaryDark dark:text-white"
            >
              {t("pending")}
            </option>
            <option
              value="success"
              className="bg-white text-black dark:bg-primaryDark dark:text-white"
            >
              {t("succeeded")}
            </option>
            <option
              value="failed"
              className="bg-white text-black dark:bg-primaryDark dark:text-white"
            >
              {t("declined")}
            </option>
          </select>
        </div>
      </div>
    </>
  );
}
