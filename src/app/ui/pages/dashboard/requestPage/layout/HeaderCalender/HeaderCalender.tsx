"use client"

import { Calender } from "@/src/app/icons/icons";
import { useFilters } from "@/src/hooks/FiltersHook";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export default function HeaderCalender() {
  const t = useTranslations('dashboard')
  const refDateFrom = useRef<HTMLInputElement>(null)
  const refDateTo = useRef<HTMLInputElement>(null)
  const addFilter = useFilters()
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // console.log(e.target.value.replaceAll('-','/'))
    addFilter(e.target.name,e.target.value)
  }
  return (
    <>
      <div>
        <label htmlFor="from" className="block mb-1">{t('date-from')}</label>
        <div className="px-3 py-2 rounded-lg border border-[#B3B7BE] flex justify-between items-center gap-2">
          <input onChange={handleInput} name="startDate" ref={refDateFrom} id="from" type="date" defaultValue={"2022-12-12"} placeholder="12/12/2022" className="w-full bg-transparent outline-none placeholder:text-black" />
          <Calender onClick={() => {
            refDateFrom.current?.showPicker();
          }} 
            className="text-black dark:text-white" />
        </div>
      </div>
      <div>
        <label htmlFor="to" className="block mb-1">{t('date-to')}</label>
        <div className="px-3 py-2 rounded-lg border border-[#B3B7BE] flex justify-between items-center gap-2">
          <input onChange={handleInput} name="endDate" ref={refDateTo} id="to" type="date" defaultValue={"2022-12-12"} placeholder="12/12/2022" className=" w-full bg-transparent outline-none placeholder:text-black" />
          <Calender onClick={() => refDateTo.current?.showPicker()} className="text-black dark:text-white" />
        </div>
      </div>
    </>
  );
}
