"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import FormMain from "./FormMain";

export default function FormPopAgentsATemplate() {
  const types = ["owner","sup-admin","admin","technical","custom"]
  const [display,setDisplay] = useState<number>(0)
  const t = useTranslations("dashboard");
  return (
    <div className="mt-5">
      <div className="flex gap-2 mb-5">
        {types.map((item,index)=>{
          return <button onClick={()=>setDisplay(index)} 
            className={`p-1 px-2 rounded-md capitalize ${display === index ? "bg-[#00CC66]" : "bg-[#D0D0D0] dark:bg-gray-500"}`} key={index}>
              {t(item)}
            </button>
        })}
      </div>
      <div className="mt-10">
        <FormMain />
      </div>
    </div>
  );
}
