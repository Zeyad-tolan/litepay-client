"use client"
import { useTranslations } from "next-intl";
import OneCardUserDetails from "../OneCardUserDetails";
import { cards } from "@/src/types/allUsersType";

export default function Cards({ cards }: { cards: cards[] }) {
  const t = useTranslations('dashboard')
  return (
    <div>
      <h1 className="text-lg font-medium">
        {t('cards')}
      </h1>
      <div>
        {
          cards.map((item, index) => {
            return <OneCardUserDetails cardNum={item.cardNumber.slice(-4)} id={item.id} index={index + 1} key={index} />
          })
        }
      </div>
    </div>
  );
}
