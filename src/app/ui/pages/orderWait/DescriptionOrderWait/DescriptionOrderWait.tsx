import { useTranslations } from "next-intl";

export default function DescriptionOrderWait() {
  const t = useTranslations("order-wait")
  return (
    <div>
      <p className="text-center">
        {t("description")}
      </p>
    </div>
  );
}
