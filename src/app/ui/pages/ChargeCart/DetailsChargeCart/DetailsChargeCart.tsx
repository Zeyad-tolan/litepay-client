import { useTranslations } from "next-intl";

type DetailsChargeCartProps = {
  chargeType: "instapay" | "vodafone",
  currencyDifference: number,
  vodafoneCash: number,
  instapay: number,
  commission: number,
  cardPrice: number
};

export default function DetailsChargeCart({ chargeType, cardPrice, currencyDifference, vodafoneCash, instapay, commission }: DetailsChargeCartProps) {
  const t = useTranslations("Cards")
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
          {cardPrice} {t("usd")}
        </p>
        <p className="font-light">
          {t("card-fee")}
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
    </div>
  );
}
