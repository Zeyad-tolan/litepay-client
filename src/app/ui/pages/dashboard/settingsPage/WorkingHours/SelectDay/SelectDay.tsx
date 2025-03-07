"use client"
import { useState } from "react";
import FormWork from "../FormWork";
import { useTranslations } from "next-intl";

export default function SelectDay() {
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  const [display,setDisplay] = useState<number>(0)
  const t = useTranslations("dashboard");
  return (
    <>
      <h3>{t(`select-day`)}</h3>
      <div className="flex gap-2 my-2">
        {days.map((day,index)=>{
          return <button onClick={()=>setDisplay(index)} 
            className={`p-1 px-2 rounded-md uppercase ${display === index ? "bg-[#00CC66]" : "bg-[#D0D0D0] dark:bg-gray-500"}`} key={index}>
              {t(`${day}`)}
            </button>
        })}
      </div>
      <FormWork />
    </>
  );
}
