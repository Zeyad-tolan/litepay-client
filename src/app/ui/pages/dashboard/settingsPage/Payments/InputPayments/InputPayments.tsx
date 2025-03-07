"use client"

import { useTranslations } from "next-intl";
import { useState } from "react";

interface Props {
  name: string;
  title: string;
  value: string;
  width: string;
}

export default function InputPayments({name,title,value,width}:Props) {
  const t = useTranslations("dashboard");
  const [disable,setDisble] = useState(true)
  return (
    <div className="flex items-center gap-2 mt-5">
      <label htmlFor={name} className="text-sm text-[#1A1B2380] dark:text-white capitalize">{t(title)}:</label>
      <div>
        <input type="text" style={{width}} readOnly={disable} defaultValue={value} name={name} id={name} className={`outline-none rounded-md ${disable ? "text-[#1A1B2380]" : "text-black"} border border-gray-300 px-2 bg-white h-8`} />
      </div>
      <button type="button" onClick={()=>setDisble(!disable)} className="text-sm underline">{t("edit")}</button>
    </div>
  );
}
