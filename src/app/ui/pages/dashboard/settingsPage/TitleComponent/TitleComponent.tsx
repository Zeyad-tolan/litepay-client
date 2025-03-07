"use client";
import { ArrowBottomIcon } from "@/src/app/icons/icons";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";

interface IProp {
  title: string;
  setShow: Dispatch<SetStateAction<boolean>>
  show: boolean;
}

export default function TitleComponent({title,setShow,show}: IProp) {
  const t = useTranslations("dashboard");
  return (
    <>
      <h1 onClick={() => setShow(!show)} className="text-3xl cursor-pointer flex items-center gap-2 mb-2">
        {t(`${title}`)} <ArrowBottomIcon className={`${show ? "rotate-180" : "rotate-0"} text-black dark:!text-white`}/>
      </h1>
    </>
  );
}
