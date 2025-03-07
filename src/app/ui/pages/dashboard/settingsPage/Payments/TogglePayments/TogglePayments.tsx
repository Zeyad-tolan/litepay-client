"use client";
import { useTranslations } from "next-intl";
import ToggleButton from "../../ToggleButton";

interface Props {
  name: string;
  title: string;
  value: boolean;
}
export default function TogglePayments({name,title,value}:Props) {
  const t = useTranslations("dashboard");
  return (
    <>
      <div className="flex items-center gap-6 mt-5">
        <label htmlFor={name} className="">{t(title)}</label>
          <div>
            <ToggleButton name={name} value={value} show={true} />
          </div>
      </div>
    </>
  );
}
