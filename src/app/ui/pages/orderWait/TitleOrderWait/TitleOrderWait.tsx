"use client";
import { getMyCardType } from "@/src/types/getMyCardType";
import { getMyCard } from "@/src/util/getMyCard";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function TitleOrderWait() {
  const t = useTranslations("order-wait");
  const balance = sessionStorage.getItem("pound-value");
  const [dataCard, setDataCard] = useState<null | getMyCardType[]>(null);
  useEffect(() => {
    getMyCard(setDataCard);
  }, []);
  if (dataCard && dataCard.length > 0) {
    redirect("/en/card-dashboard");
  }

  return (
    <div>
      <p className="text-3xl font-semibold text-center">
        {t("title")}
        <span className="text-primary"> LitePay</span>
        {t("thirdTitle")}
        {t("fourthTitle")}
        <span className="text-primary"> {balance} EGP</span>
      </p>
    </div>
  );
}
