"use client"
import { useTranslations } from "next-intl";
import ToggleButton from "../../ToggleButton";
import { FormEvent } from "react";
import UndoChangeButton from "../../UndoChangeButton";
import SaveChangeButton from "../../SaveChangeButton";

export default function FormWork() {
  const t = useTranslations("dashboard");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  }
  return (
    <>
      <h3 className="mt-5">{t(`working-hours`)}</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-6 my-4">
          <div className="flex items-center gap-3">
            <label htmlFor="from">{t(`from`)}</label>
            <input onChange={(e)=> console.log(e.target.value)} type="time" defaultValue={"09:00"} name="from" id="from" className="p-1 px-2 rounded-md bg-[#D0D0D0] dark:bg-gray-500" />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="to">{t(`to`)}</label>
            <input type="time" defaultValue={"17:00"} name="to" id="to" className="p-1 px-2 rounded-md bg-[#D0D0D0] dark:bg-gray-500" />
          </div>
        </div>
        <div className="flex gap-10 my-5">
          <label htmlFor="dis">{t(`disable-day`)}</label>
          <ToggleButton name="disable" value={false} />
        </div>
        <div className="flex gap-5 justify-center items-center my-5 mb-8">
          <UndoChangeButton />
          <SaveChangeButton />
        </div>
      </form>
    </>
  );
}
