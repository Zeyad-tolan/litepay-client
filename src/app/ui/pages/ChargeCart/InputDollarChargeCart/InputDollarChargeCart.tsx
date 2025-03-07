import srcImage from "@/src/shared/Flag_of_USA.png";
import { handleInput } from "@/src/util/handelInputNumbers";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export type InputDollarChargeCartProps = {
  dollarValue: number,
  setDollarValue: Dispatch<SetStateAction<number>>,
  setFocusInputName: Dispatch<SetStateAction<"" | "pound" | "dollar">>,
};

export default function InputDollarChargeCart({ dollarValue, setDollarValue, setFocusInputName }: InputDollarChargeCartProps) {
  const t = useTranslations("Cards")

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDollarValue(+e.target.value)
    sessionStorage.setItem("dollar-value", `${+e.target.value}`);
  }

  return (
    <div className="flex flex-col gap-1">
      <p className="font-light">
        {t("exactly")}
      </p>
      <div className={`flex gap-2 py-3 px-2 border border-solid ${dollarValue < 5 ? "border-amber-400" : "border-[#868685]"} rounded-xl`}>
        <input
          type="text"
          required
          name="amountUsd"
          inputMode="numeric"
          className={`outline-none bg-transparent flex-1 min-w-14 ${dollarValue < 5 ? "text-amber-400" : ""}`}
          value={Math.floor(dollarValue)}
          onChange={(e) => handelChange(e)}
          onFocus={() => setFocusInputName("dollar")}
          onBlur={() => setFocusInputName("")}
          onInput={handleInput}
        />
        <Image
          src={srcImage}
          alt="dollar usa"
          className="w-6 h-6 rounded-full object-left-top"
        />
        <p>
          {t("usd")}
        </p>
      </div>
      <p className="font-light">
        {!Number.isInteger(dollarValue) && t('the-platform-only-accepts-whole-numbers').concat(" ", `${dollarValue.toFixed(2)}`, " ", t('will-be-rounded-to'), " ", `${Math.floor(dollarValue)}`)}
      </p>
      <p className={`text-sm font-light ${dollarValue < 5 ? "text-amber-400" : ""}`}>
        {t("minimum")} : 5$
      </p>
    </div>
  );
}
