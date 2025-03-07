"use client"
import { useTranslations } from "next-intl";

export default function ShowDataRefundsHeader() {
  const t = useTranslations('dashboard')
    const items = ["company-name", "card-number", "amount","date", "time", "actions"]
  return (
    <>
      <thead>
          <tr className="border-t">
            {
              items.map((item, index) => {
                return (
                  <th key={index} colSpan={item == "company-name" ? 2 : 1} className={`font-normal py-4 ${item == "company-name" ? "text-center" : "text-center"} `}>
                    {t(item)}
                  </th>
                )
              })
            }
          </tr>
      </thead>
    </>
  );
}
