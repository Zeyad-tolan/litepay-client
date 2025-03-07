"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function RateComponent({title,value}:{title:string,value:string}) {
  const t = useTranslations("dashboard");
  const [valueIn, setValue] = useState(value);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // console.log(+value);
    if(+(value) > 100){
      setValue("100");
    }
    else if(+(value) <= 0){
      setValue("0");
    }
    else{
      setValue(value);
    }
  }
  // console.log(valueIn);
  return (
    <div>
      <h3 className="capitalize text-[#454745] dark:text-white font-light mb-2">{t(`${title}`)}</h3>
      <label htmlFor={title} className={`flex justify-center items-center w-[200px] py-3 border border-[#868685] overflow-hidden relative rounded-full`}>
        <input type="number" minLength={1} maxLength={3} id={title} value={valueIn} onChange={handleInput} name={title.split("-")[0]} className={`bg-transparent z-10 ${valueIn.length === 1 ? "w-3" : valueIn.length === 2 ? "w-5" : "w-7"} outline-none inputNum`} />
        <span className="z-10">%</span>
        <div style={{ width: `${valueIn}%` }} className={`absolute top-0 ltr:left-0 rtl:right-0 h-full rounded-full bg-primary`}>
        </div>
      </label>
    </div>
  );
}
