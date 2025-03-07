import { useTranslations } from "next-intl";

export default function HeroChargeCard() {
  const t = useTranslations("Cards")

  return (
    <div className="w-full flex flex-col gap-1 items-center text-center">
      <p className="text-4xl font-medium">
        {t("charge-card")}
      </p>
      <p className=" font-light">
        {t("msg-charge-card")}
      </p>
    </div>
  );
}
