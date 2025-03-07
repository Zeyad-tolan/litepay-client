import { useTranslations } from "next-intl";

export default function DescriptionAddBalanceWait() {
  const t = useTranslations("order-wait")
  return (
    <div>
      <p className="text-center">
        {t("description-add-balance-wait")}
      </p>
    </div>
  );
}
