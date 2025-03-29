"use client";
import { useTranslations } from "next-intl";

export default function ShowDataCardHeader() {
  const t = useTranslations("dashboard");
  const items = [
    "name",
    "card-number",
    "createDate",
    "totalDeposits",
    "balance",
  ];
  return (
    <>
      <thead>
        <tr className="border-t">
          {items.map((item, index) => {
            return (
              <th key={index} className={`font-semibold py-3 text-center `}>
                {t(item)}
              </th>
            );
          })}
        </tr>
      </thead>
    </>
  );
}
