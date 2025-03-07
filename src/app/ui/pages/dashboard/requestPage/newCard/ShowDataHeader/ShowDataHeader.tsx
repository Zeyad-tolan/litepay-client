"use client"
import { useTranslations } from "next-intl";

export default function ShowDataHeader() {
  const t = useTranslations('dashboard')
  const items = ["image", "name-on-card", "phone-number", "amount", "amount-usd", "states", "methods", "actions", "details"]
  return (
    <>
      <thead>
          <tr className="border-t">
            {
              items.map((item, index) => {
                return (
                  <th key={index} className={`font-normal py-4 text-center`}>
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
