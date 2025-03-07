"use client";
import { useTranslations } from "next-intl";

export default function HeaderItemsRequestPage() {
  const t = useTranslations('dashboard')
  const items = ["image", "name-on-card", "phone-number", "amount", "amount-usd", "states", "methods", "actions", "details"]

  return (
    <div className="grid grid-cols-12">
      {
        items.map((item, index) => {
          return (
            <p key={index} className={`${item == "name-on-card" || item == "actions" || item == "states" ? "col-span-2" : "col-span-1 "} text-center xl lg:text-sm text-xs`}>
              {t(item)}
            </p>
          )
        })
      }
    </div>
  );
}
