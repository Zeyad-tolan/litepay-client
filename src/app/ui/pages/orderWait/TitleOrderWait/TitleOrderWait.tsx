import { useTranslations } from "next-intl";

export default function TitleOrderWait() {
  const t = useTranslations("order-wait")
  return (
    <div>
      <p className="text-3xl font-semibold text-center">
        {t("title")}
        <span className="text-primary"> LitePay</span>
        {t("secondTitle")}
      </p>
    </div>
  );
}
