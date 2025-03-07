import { useTranslations } from "next-intl";

export default function CopyrightFooter() {
  const t = useTranslations("Footer")
  return (
    <p className="text-primary font-medium">
      {t("copyright")}
    </p>
  );
}
