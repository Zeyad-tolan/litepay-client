import { useTranslations } from "next-intl";

type DetailsAddBalanceProps = {
  chargeType: "instapay" | "vodafone",
  currencyDifference: number,
  vodafoneCash: number,
  instapay: number,
  commission: number,
  save:number,
  role:string
};
export default function DetailsAddBalance({save, role, chargeType, currencyDifference, vodafoneCash, instapay, commission }: DetailsAddBalanceProps) {
  const t = useTranslations("Cards")
  // console.log(commission)
  return (
    <div className="w-full flex-col gap-1">
      <div className="flex ltr:flex-row rtl:flex-row-reverse justify-between items-center">
        <p className="font-medium">
          {
            chargeType == "vodafone" ?
              `${vodafoneCash * 100}%` :
              `${instapay * 100}%`
          }
        </p>
        <p className="font-light">
          {t(chargeType == "vodafone" ? "vf-cash" : "instapay")}
        </p>
      </div>
      <div className="flex ltr:flex-row rtl:flex-row-reverse justify-between items-center">
        <p className="font-medium">
          {currencyDifference} + {(commission * 100).toFixed(2)}%
        </p>
        <p className="font-light">
          {t("exchange-rate")}
        </p>
      </div>
      {
        role === "vip" &&
        <div className="flex ltr:flex-row rtl:flex-row-reverse justify-between items-center">
          <p className="font-medium">
            <span className="text-primary">{save.toFixed(2)}</span> {t("egp")}
          </p>
          <p className="font-light">
            {t("your-saving")}
          </p>
        </div>
      }
    </div>
  );
}
