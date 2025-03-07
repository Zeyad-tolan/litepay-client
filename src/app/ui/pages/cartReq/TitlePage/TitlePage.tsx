import { useTranslations } from "next-intl";

export default function TitlePage() {
  const t = useTranslations("Cards")
  return (
    <p className="text-center text-white font-medium text-3xl">
      {t("card-request")}
    </p>
  );
}
