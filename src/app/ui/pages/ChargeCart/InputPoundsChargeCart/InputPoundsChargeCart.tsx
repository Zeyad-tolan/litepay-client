import srcImage from "@/src/shared/Flag_of_Egypt.png";
import { handleInput } from "@/src/util/handelInputNumbers";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export type InputPoundsChargeCartProps = {
  poundValue: number,
  setPoundValue: Dispatch<SetStateAction<number>>,
  setFocusInputName: Dispatch<SetStateAction<"" | "pound" | "dollar">>,
};
export default function InputPoundsChargeCart({ poundValue, setPoundValue, setFocusInputName }: InputPoundsChargeCartProps) {
  const t = useTranslations("Cards")

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPoundValue(+e.target.value)
    sessionStorage.setItem("pound-value", `${+e.target.value}`);
  }

  return (
    <div className="flex flex-col gap-1">
      <div className={`flex gap-2 py-3 px-2 border border-solid ${poundValue > 50000 ? "border-amber-400" : "border-[#868685]"} rounded-xl`}>
        <input
          type="text"
          required
          maxLength={5}
          name="amount"
          inputMode="numeric"
          className={`outline-none bg-transparent flex-1  min-w-14 ${poundValue > 50000 ? "text-amber-400" : ""}`}
          value={Math.ceil(poundValue)}
          onFocus={() => setFocusInputName("pound")}
          onBlur={() => setFocusInputName("")}
          onChange={(e) => handelChange(e)}
          onInput={handleInput}
        />
        <Image
          src={srcImage}
          alt="dollar usa"
          className="w-6 h-6 rounded-full object-left-top"
        />
        <p>
          {t("egp")}
        </p>
      </div>
      <p className="font-light">
        {!Number.isInteger(poundValue) && t('the-platform-only-accepts-whole-numbers').concat(" ", `${poundValue.toFixed(2)}`, " ", t('will-be-rounded-to'), " ", `${Math.ceil(poundValue)}`)}
      </p>
      <p className={`text-sm font-light ${poundValue > 50000 ? "text-amber-400" : ""}`}>
        {t("max")} : 50000{t("egp")}
      </p>
    </div>
  );
}
