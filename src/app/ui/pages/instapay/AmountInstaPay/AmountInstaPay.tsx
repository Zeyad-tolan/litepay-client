"use client"
import { useTranslations } from "next-intl";
import Cookies from 'js-cookie';

export default function AmountInstaPay() {
  const t = useTranslations("TransactionsTable")
  const amountInst = Cookies.get("amountInst")
  return (
    <div className="flex-1">
      <label htmlFor="amount-instapay" className="font-medium">
        {t("amount")}
      </label>
      <div className="flex gap-1 items-center text-black bg-[#E8E8E8] dark:bg-[#c5c5c5] rounded-xl p-2  transition-all duration-300">
        <p className="flex-1 bg-transparent outline-none">
          {amountInst}
        </p>
        <p>
          EGP
        </p>
      </div>
    </div>
  );
}
