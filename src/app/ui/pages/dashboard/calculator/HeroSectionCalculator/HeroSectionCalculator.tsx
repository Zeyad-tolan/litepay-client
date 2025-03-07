import { useTranslations } from "next-intl";
import SideBarDashboard from "../../SideBarDashboard";

export default function HeroSectionCalculator() {
  const t = useTranslations('dashboard')

  return (
    <div className="flex items-center gap-2">
      <SideBarDashboard />
      <h1 className="text-2xl">
        {t('calculator')}
      </h1>
    </div>
  );
}
