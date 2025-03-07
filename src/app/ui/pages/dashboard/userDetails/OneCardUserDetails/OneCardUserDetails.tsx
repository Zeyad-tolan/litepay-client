"use client";
import { CircleMinus } from "@/src/app/icons/icons";
import { deleteCard } from "@/src/util/deleteCard";
import { useTranslations } from "next-intl";

export type OneCardUserDetailsProps = {
  index: number;
  cardNum: string;
  id: number;
};
export default function OneCardUserDetails({ cardNum, index,id }: OneCardUserDetailsProps) {
  const t = useTranslations('dashboard')
  console.log(id)
  return (
    <div className="flex justify-between gap-10 mt-3">
      <p className="text-nowrap">{index}. ****-{cardNum}</p>
      <button  onClick={()=>deleteCard(`${id}`,false)} className="flex items-center gap-1 text-sm text-nowrap">
        <CircleMinus /> {t('remove-card')}
      </button>
    </div>
  );
}
