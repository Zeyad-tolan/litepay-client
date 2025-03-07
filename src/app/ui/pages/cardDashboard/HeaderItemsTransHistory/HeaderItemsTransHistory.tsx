import { useTranslations } from "next-intl";

export default function HeaderItemsTransHistory() {
  const t = useTranslations("Cards")

  return (
    <div className="grid md:grid-cols-12 grid-cols-8 font-medium items-center md:text-base text-sm">
      <p className="md:col-span-8 col-span-2">
        {t("company-name")}
      </p>
      <p className="md:col-span-1 col-span-2">
        {t("amount")}
      </p>
      <p className="md:col-span-1 col-span-2">
        {t("date")}
      </p>
      <p className="md:col-span-2 col-span-2">
        {t("time")}
      </p>
    </div>
  );
}
