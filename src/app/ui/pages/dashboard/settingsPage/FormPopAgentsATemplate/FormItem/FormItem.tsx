"use client";
import { useTranslations } from "next-intl";
import ToggleButton from "../../ToggleButton";

interface Props {
  title: string;
  name: string;
  value: boolean;
}
export default function FormItem({title,name,value}: Props) {
  const t = useTranslations("dashboard");
  return (
    <div className="flex justify-between items-center gap-5">
      <p>{t(title)}</p>
      <ToggleButton name={name} value={value} />
    </div>
  );
}
