import { useTranslations } from "next-intl";

export default function HeaderDataRechargeCard() {
  const t = useTranslations('dashboard')
  const items = ["image", "name-on-card", "card-number", "amount", "amount-usd", "states", "methods", "actions", "details"]
  return (
    <thead>
      <tr className="border-t">
        {
          items.map((item, index) => {
            return (
              <th key={index} colSpan={item == "image" ? 2 : 1} className={`font-normal py-4 ${item == "image" ? "text-end" : "text-center"} `}>
                {t(item)}
              </th>
            )
          })
        }
      </tr>
    </thead>
  );
}
