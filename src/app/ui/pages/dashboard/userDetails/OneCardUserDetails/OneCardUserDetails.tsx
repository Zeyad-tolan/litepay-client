"use client";
import { CircleMinus } from "@/src/app/icons/icons";
import { deleteCard } from "@/src/util/deleteCard";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export type OneCardUserDetailsProps = {
  index: number;
  cardNum: string;
  id: number;
};
export default function OneCardUserDetails({
  cardNum,
  index,
  id,
}: OneCardUserDetailsProps) {
  const currentPage = usePathname();
  const t = useTranslations("dashboard");
  const { lang } = useParams();

  console.log(lang);
  return (
    <div className="flex justify-between gap-10 mt-3">
      {currentPage.includes("dashboard") ? (
        <Link href={`/${lang}/dashboard/cards/${id}`} className="text-nowrap">
          {index}. ****-{cardNum}
        </Link>
      ) : (
        <p className="text-nowrap">
          {index}. ****-{cardNum}
        </p>
      )}

      {currentPage.includes("dashboard") ? (
        <button
          onClick={() => deleteCard(`${id}`, false)}
          className="flex items-center gap-1 text-sm text-nowrap"
        >
          <CircleMinus /> {t("remove-card")}
        </button>
      ) : null}
    </div>
  );
}
