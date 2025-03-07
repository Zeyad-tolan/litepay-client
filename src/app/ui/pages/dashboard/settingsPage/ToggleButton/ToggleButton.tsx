"use client"
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ToggleButton({value,name,show}:{value:boolean,name:string,show?:boolean}) {
  const [isOn, setIsOn] = useState(value);

  const t = useTranslations("dashboard");

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="flex items-center gap-6">
      {show && <span className="text-sm text-[#1A1B2380] dark:text-gray-500">{isOn ? t("enabled") : t("disabled")}</span>}
      <label htmlFor={name}
        className={`w-14 h-7 flex items-center rounded-full p-2 px-2 relative cursor-pointer transition ${
          isOn ? 'bg-green-500' : 'bg-gray-300'
        }`}
      >
        <input
          type="checkbox"
          name={name}
          id={name}
          checked={isOn}
          onReset={() => {setIsOn(value);}}
          onChange={() => handleToggle()}
          className="hidden"
        />
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md duration-700 absolute transform transition ${
            isOn ? 'left-1' : 'right-1'
          }`}
        ></div>
      </label>
    </div>
  );
}
