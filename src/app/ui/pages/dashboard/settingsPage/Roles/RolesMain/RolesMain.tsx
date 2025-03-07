"use client";
import { Search } from "@/src/app/icons/icons";
import TitleComponent from "../../TitleComponent";
import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

export default function RolesMain() {
  const [show,setShow] = useState<boolean>(true)
  const t = useTranslations("dashboard");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  }
  return (
    <div className="border-t border-t-[#1A1B2380] dark:border-gray-500 py-5">
      <TitleComponent title="roles" setShow={setShow} show={show}/>
      <div className={`${show ? "h-auto" : "h-0"} overflow-hidden transition-all duration-300`}>
        <h3 className="my-5">{t("add-user-dashboard")}</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="search" className="text-sm block text-[#1A1B23] dark:text-white mb-1">{t("search")}</label>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 border border-gray-300 px-2 bg-white w-[300px] h-9 rounded-md">
                <Search className="fill-[#B3B7BE]" />
                <input type="text" placeholder={t("username")} name="search" id="search" className="outline-none placeholder:text-[#B3B7BE]" />
              </div>
              <button type="submit" className="bg-[#00CC66] px-4 py-1 rounded-full">{t("add")}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
