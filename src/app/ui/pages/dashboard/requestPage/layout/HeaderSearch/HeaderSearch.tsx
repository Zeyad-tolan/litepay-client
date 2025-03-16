"use client";
import { Search } from "@/src/app/icons/icons";
import { useFilters } from "@/src/hooks/FiltersHook";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function HeaderSearch() {
  const t = useTranslations("dashboard");
  const addFilter = useFilters();
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  // Update filter when debouncedQuery changes
  useEffect(() => {
    addFilter("searchWord", debouncedQuery || "");
  }, [debouncedQuery, addFilter]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <label htmlFor="search" className="block mb-1">
        {t("search")}
      </label>
      <div className="px-3 py-2 rounded-lg border border-[#B3B7BE] flex items-center gap-2">
        <Search className="fill-[#B3B7BE]" />
        <input
          onChange={handleSearch}
          id="search"
          type="text"
          placeholder={t("search")}
          className="w-full bg-transparent outline-none placeholder:text-black dark:placeholder:text-white"
        />
      </div>
    </div>
  );
}
