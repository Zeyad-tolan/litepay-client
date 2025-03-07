import { Dispatch, SetStateAction } from "react";
import { useTranslations } from "use-intl";

export default function PromoCode({ value, setValue }: { value: string, setValue: Dispatch<SetStateAction<string>> }) {
  const t = useTranslations("Cards")
  return (
    <div className="w-full flex items-center py-1 px-3 border border-solid border-[#868685] rounded-lg text-sm">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={t("promo-code")}
        className="bg-transparent flex-1 outline-none min-w-14"
      />
      <input
        type="button"
        value={t("apply")}
        className="text-[#868685] cursor-pointer  w-fit" />
    </div>
  );
}
