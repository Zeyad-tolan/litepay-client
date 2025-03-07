"use client";

import { useTranslations } from "next-intl";

export default function ShowDataUserHeader() {
  const t =  useTranslations("dashboard");
  const items = ["name","phoneNumber","email","registerDate","firstCard","totalDeposits","deposits","details"];
  return (
    <>
      <thead>
          <tr className="border-t">
            {
              items.map((item, index) => {
                return (
                  <th key={index} colSpan={item == "name" ? 2 : 1} className={`font-normal py-4 ${item == "name" ? "text-center" : "text-center"} `}>
                    {t(item)}
                    {
                      item === "user" && (
                        <span className="text-gray-400 block text-xs font-normal">
                          {t("telegram")}
                        </span>
                      )
                    }
                    {
                      item === "deposits" && (
                        <span className="text-gray-400 block text-xs font-normal">
                          {t("last")}
                        </span>
                      )
                    }
                  </th>
                )
              })
            }
          </tr>
      </thead>
    </>
  );
}
