import { useTranslations } from "next-intl";

export type OneItemCardDetailsProps = {
  title: string,
  value: string
};
export default function OneItemCardDetails({ title, value }: OneItemCardDetailsProps) {
  const t = useTranslations('dashboard')

  return (
    <div className={` flex flex-col gap-1 col-span-1`}>
      <p className="text-lg font-medium flex gap-1">
        {t(title)}
      </p>
      <p>
        {title == "card-balance" || title == "total-deposits" || title == "last-30-Days" ? value.concat(" ", t('usd')) : value}
      </p>
    </div>
  )
}
