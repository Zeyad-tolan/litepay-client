/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddBalanceIcon, DiamondDarkIcon } from "@/src/app/icons/icons";
import srcImage from "@/src/shared/Diamond.svg";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LineBar from "../LineBar";
import { useParams } from "next/navigation";
import Link from "next/link";

export type DetailsCardDashboardProps = {
  type?: "basic" | "premium"
  support: "available" | "unavailable"
  balance: number
  status: string;
  totalDepositsRequests?:number;
  totalDepositsTrans?: number;
  lineBarValue: string;
  toBeSpecial?: number;
  provided?: number,
  vipUser: number;
  normalUser: number;
};

export default function DetailsCardDashboard({ normalUser,vipUser, support, status,balance }: DetailsCardDashboardProps) {
  const t = useTranslations("Cards")
  const { lang } = useParams()
  const totalDepositsPeriume = 1000 
  const userNeed = (1000 - +balance) < 0 ? 0 : (1000 - +balance).toFixed(2)

  const { user }: any = jwtDecode(Cookies.get("token") as string);
  const commission = user.rating ? +(user.rating)/100 :  user.Role ? user.Role.type === "user" ? normalUser : vipUser : normalUser
  const yourSavePro = (totalDepositsPeriume+(totalDepositsPeriume*normalUser)) - (totalDepositsPeriume+(totalDepositsPeriume*commission))
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center w-fit h-fit px-3 py-2 rounded-full border border-solid border-primary bg-primary/10">
        <>
          {
            user.Role && user.Role.type !== "user" &&
            <>
              <Image
                src={srcImage}
                alt=""
                className="dark:hidden"
              />
              <DiamondDarkIcon className="hidden dark:block" />
            </>
          }
        </>
        {t(user.Role && user.Role.type !== "user" ? "premium" : "basic")}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-medium ">
          {t("balance")} {balance.toFixed(2)}$
          {/* 
            const balance = totalDepositsRequests - totalDepositsTransactions
          */}
        </p>
        <p className="text-lg">
          {t("status")} <span className="text-primary">{t(status == "active" ? "active" : "un-active")}</span>
        </p>
        <p className="text-lg">
          {t("support")} <span className="text-primary">{t(support == "available" ? "available" : "unavailable")}</span>
        </p>
        <p className="text-lg">
          {t("card-type")} Mastercard
        </p>
        <div className="text-lg flex gap-1">
          <p className="text-nowrap">{t("address")} </p> <p> 30 North Gould Street, Sheridan,<br /> Wyoming, USA 82801</p>
        </div>
      </div>
      <Link 
        onClick={() => {
          if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'click_add_balance_on_card_page');
          }
          if (typeof window !== 'undefined' && window.ttq) {
            window.ttq.track('click_add_balance_on_card_page');
          }
        }}
        href={`/${lang}/add-balance`} className=" bg-primary rounded-full px-2 py-1 flex items-center gap-1 w-fit text-black">
        <AddBalanceIcon /> {t("add-balance")}
      </Link>
      {
        user.Role && user.Role.type !== "user" ?
          <p>
            {/* {t("you-saved")} <span className="text-[#EDA800] font-medium">
              {(yourSavePro).toFixed(2)}</span> {t("egp-as-you-special")} */}
          </p>
          :
          <>
            <LineBar value={`${+balance / 1000 * 100}%`} />
            <p>
              {t("you-need")} <span className="text-primary font-medium">
                {userNeed}</span> {t("to-be-premium")}
                {/* 
                  const balance = 1000 - totalDepositsRequests
                 */}
            </p>
          </>
      }
    </div>
  );
}