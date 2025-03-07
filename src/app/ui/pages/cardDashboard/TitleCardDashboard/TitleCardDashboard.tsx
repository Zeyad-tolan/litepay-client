
import { useTranslations } from "next-intl";

export default function TitleCardDashboard() {
  const t = useTranslations("Cards")
  return (
    <p className="font-medium w-full text-3xl md:text-5xl md:text-start text-center">
      {t("card-dashboard")}
    </p>
  );
}
