import { useTranslations } from "next-intl";
import { ChangeEvent } from "react";

export type ValueReteProps = {
  value: number,
  title: string,
  changeValue: (e: ChangeEvent<HTMLInputElement>) => void
};
export default function ValueRete({ value, title, changeValue }: ValueReteProps) {
  const t = useTranslations('Cards')
  return (
    <div className="flex items-center justify-between gap-2">
      <input
        type="number"
        value={value}
        onChange={(e) => changeValue(e)}
        className="border border-solid border-black dark:border-white p-2 rounded-lg bg-transparent focus:outline-none w-1/3"
      />
      <p className="flex-1">
        {t(title)}
      </p>
    </div>
  );
}
