"use client"
import { useTranslations } from "next-intl";
import PopEdit from "../PopEdit";
import { useState } from "react";

interface IProps {
  name: string;
  id: number;
}
export default function AgentsDataItem({id,name}: IProps) {
  const t = useTranslations("dashboard");
  const [show,setShow] = useState<boolean>(false)
  return (
    <div className="flex items-center gap-10">
      <h2>{name}</h2>
      <button onClick={() => setShow(true)} type="button" className="text-sm py-1 px-2 rounded-md bg-primary">{t("edit")}</button>
      <PopEdit id={id} name={name} setShow={setShow} show={show} />
    </div>
  );
}
