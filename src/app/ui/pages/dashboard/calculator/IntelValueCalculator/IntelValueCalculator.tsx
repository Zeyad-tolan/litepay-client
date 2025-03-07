import egpSrc from "@/src/shared/Flag_of_Egypt.png";
import usdSrc from "@/src/shared/Flag_of_USA.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChangeEvent } from "react";

export type IntelValueCalculatorProps = {
  type: "usd" | "egp",
  value: number,
  changeValue: (e: ChangeEvent<HTMLInputElement>) => void
};
export default function IntelValueCalculator({ value, type, changeValue }: IntelValueCalculatorProps) {
  const t = useTranslations("Cards")

  return (
    <div className="py-2 px-4 border border-black dark:border-white border-solid rounded-xl flex justify-between items-center">
      <input
        type="number"
        value={value}
        onChange={(e) => changeValue(e)}
        className="bg-transparent text-black dark:text-white flex-1 focus:outline-none"
      />
      <div className="flex justify-between items-center gap-2">
        <Image
          src={type == "usd" ? usdSrc : egpSrc}
          alt="dollar usa"
          className="w-6 h-6 rounded-full object-left-top"
        />
        <p>
          {t(type == "usd" ? "usd" : "egp")}
        </p>
      </div>
    </div>
  );
}
