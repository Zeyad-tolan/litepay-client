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
import { useEffect, useState } from "react";
import { getOneUser } from "@/src/util/getOneUser";
import toast from "react-hot-toast";

export type DetailsCardDashboardProps = {
  type?: "basic" | "premium";
  support: "available" | "unavailable";
  balance: number;
  status: string;
  totalDepositsRequests?: number;
  totalDepositsTrans?: number;
  lineBarValue: number;
  toBeSpecial?: number;
  provided?: number;
  vipUser: number;
  normalUser: number;
};

export default function DetailsCardDashboard({
  normalUser,
  vipUser,
  support,
  status,
  balance,
  lineBarValue,
}: DetailsCardDashboardProps) {
  const t = useTranslations("Cards");
  const { lang } = useParams();
  const totalDepositsPeriume = 1000;
  const userNeed =
    1000 - lineBarValue < 0 ? 0 : (1000 - lineBarValue).toFixed(2);
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    // get user from jwtDecode
    const { user }: any = jwtDecode(Cookies.get("token") as string);
    getOneUser(user.id, setUser);
  }, []);
  const commission = user?.rating
    ? +user.rating / 100
    : user?.Role
    ? user.Role.type === "user"
      ? normalUser
      : vipUser
    : normalUser;
  const yourSavePro =
    totalDepositsPeriume +
    totalDepositsPeriume * normalUser -
    (totalDepositsPeriume + totalDepositsPeriume * commission);
  return (
    <div className="flex flex-col gap-2">
      {user ? (
        <div className="flex gap-2 items-center w-fit h-fit px-3 py-2 rounded-full border border-solid border-primary bg-primary/10">
          <>
            {user?.Role && user?.Role?.type !== "user" && (
              <>
                <Image src={srcImage} alt="" className="dark:hidden" />
                <DiamondDarkIcon className="hidden dark:block" />
              </>
            )}
          </>
          {user &&
            t(user?.Role && user?.Role?.type !== "user" ? "premium" : "basic")}
        </div>
      ) : null}
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-medium ">
          {t("balance")} {balance.toFixed(2)}$
          {/* 
            const balance = totalDepositsRequests - totalDepositsTransactions
          */}
        </p>
        <p className="text-lg">
          {t("status")}{" "}
          <span className="text-primary">
            {t(status == "active" ? "active" : "un-active")}
          </span>
        </p>
        <p className="text-lg">
          {t("support")}{" "}
          <span className="text-primary">
            {t(support == "available" ? "available" : "unavailable")}
          </span>
        </p>
        <p className="text-lg">{t("card-type")} Mastercard</p>
        <div className="text-lg flex gap-1">
          <p className="text-nowrap">{t("address")} </p>{" "}
          <p>
            {" "}
            30 North Gould Street, Sheridan,
            <br /> Wyoming, USA 82801
          </p>
        </div>
      </div>
      {/* <Link
        onClick={() => {
          if (typeof window !== "undefined" && window.fbq) {
            window.fbq("track", "click_add_balance_on_card_page");
          }
          if (typeof window !== "undefined" && window.ttq) {
            window.ttq.track("click_add_balance_on_card_page");
          }
        }}
        href={`/${lang}/add-balance`}
        className=" bg-primary rounded-full px-2 py-1 flex items-center gap-1 w-fit text-black"
      >
        <AddBalanceIcon /> {t("add-balance")}
      </Link> */}
      <button
        onClick={() => {
          toast.error("This feature is under maintenance");
          return;
          if (typeof window !== "undefined" && window.fbq) {
            window.fbq("track", "click_add_balance_on_card_page");
          }
          if (typeof window !== "undefined" && window.ttq) {
            window.ttq.track("click_add_balance_on_card_page");
          }
        }}
        className=" bg-primary rounded-full px-2 py-1 flex items-center gap-1 w-fit text-black border-none"
      >
        <AddBalanceIcon /> {t("add-balance")}
      </button>
      {user?.Role && user?.Role?.type !== "user" ? (
        <p>
          {/* {t("you-saved")} <span className="text-[#EDA800] font-medium">
              {(yourSavePro).toFixed(2)}</span> {t("egp-as-you-special")} */}
        </p>
      ) : (
        <>
          {/* <LineBar value={`${(+balance / 1000) * 100}%`} />
          <p>
            {t("you-need")}{" "}
            <span className="text-primary font-medium">{userNeed}</span>{" "}
            {t("to-be-premium")}
            
                  const balance = 1000 - totalDepositsRequests
                
          </p> */}
        </>
      )}
    </div>
  );
}
