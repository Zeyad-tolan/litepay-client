import { CheckCycleIcon, ClockCyleIcon, MinusCycleIcon } from "@/src/app/icons/icons";
import { useTranslations } from "next-intl";

export type OneItemPopUpProps = {
  title: string,
  value: string
};
export default function OneItemPopUp({ title, value }: OneItemPopUpProps) {
  const t = useTranslations('dashboard')

  return (
    <div className="flex items-center gap-1 ">
      <p className="w-fit">
        {t(title)} :
      </p>
      {
        title == "states" ?
          <span
            className={`flex items-center gap-1 ${value === "pending"
              ? "text-[#B5850B]"
              : value === "success"
                ? "text-[#165E3D]"
                : "text-[#B83131]"
              } px-2 capitalize py-1 rounded-md`}
          >
            {value === "success" ? (
              <CheckCycleIcon />
            ) : value === "pending" ? (
              <ClockCyleIcon />
            ) : (
              <MinusCycleIcon />
            )}
            {value}
          </span> :
          <p className="w-fit">
            {value}
          </p>
      }
    </div>
  );
}
