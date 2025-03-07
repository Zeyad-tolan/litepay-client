"use client"
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import FormPopItems from "../FormPopItems";
import UndoChangeButton from "../../UndoChangeButton";
import SaveChangeButton from "../../SaveChangeButton";

export default function FormPopEdit() {
  const types = ["owner","sup-admin","admin","technical","custom"]
  const [display,setDisplay] = useState<number>(0)
  const t = useTranslations("dashboard");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit} onReset={(e)=> e.currentTarget.reset()}>
        <div className="flex gap-2 mb-5">
          {types.map((item,index)=>{
            return <label onClick={()=>setDisplay(index)} htmlFor={item}
              className={`p-1 px-2 rounded-md cursor-pointer block capitalize ${display === index ? "bg-[#00CC66]" : "bg-[#D0D0D0] dark:bg-gray-500"}`} key={index}>
                {t(item)}
                <input type="radio" value={item} name={"role"} id={item} className="hidden"/>
              </label>
          })}
        </div>
        <div className="mt-10">
          <FormPopItems />
        </div>
        <div className="flex gap-5 justify-center items-center my-8">
          <UndoChangeButton />
          <SaveChangeButton />
        </div>
      </form>
    </>
  );
}
