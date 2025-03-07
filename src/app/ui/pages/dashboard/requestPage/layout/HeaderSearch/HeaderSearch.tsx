"use client"
import { Search } from "@/src/app/icons/icons";
import { useFilters } from "@/src/hooks/FiltersHook";
import { useTranslations } from "next-intl";

export default function HeaderSearch() {
  const t = useTranslations('dashboard')
  const addFilter = useFilters()
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    addFilter("searchWord",e.target.value)
  }
  return (
    <div>
      <label htmlFor="search" className="block mb-1">{t('search')}</label>
      <div className="px-3 py-2 rounded-lg border border-[#B3B7BE] flex items-center gap-2">
        <Search className="fill-[#B3B7BE]" />
        <input onChange={handleSearch} id="search" type="text" placeholder={t('search')} className="w-full bg-transparent outline-none placeholder:text-black dark:placeholder:text-white" />
      </div>
    </div>
  );
}
