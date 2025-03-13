"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function TitleAddBalanceWait() {
  const t = useTranslations("order-wait");
  const { lang } = useParams();
  useEffect(() => {
    setTimeout(() => {
      window.location.assign(`/${lang}/card-dashboard`);
    }, 1000 * 3);
  }, [lang]);
  return (
    <div>
      <p className="text-3xl font-semibold text-center">
        {t("title-add-balance-wait")}
        <span className="text-primary"> LitePay</span>
        {t("secondTitle")}
      </p>
    </div>
  );
}
