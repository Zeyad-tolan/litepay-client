import { useTranslations } from "next-intl";

export default function RefreshButton() {
  const t = useTranslations('dashboard')

  return (
    <div>
      <button onClick={() => window.location.reload()} className="border border-[#B3B7BE] rounded-md p-2 py-1 font-medium text-[#1A1B23] dark:text-white">
        {t('refresh')}
      </button>
    </div>
  );
}
