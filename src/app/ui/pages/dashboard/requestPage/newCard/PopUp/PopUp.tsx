/* eslint-disable @next/next/no-img-element */
import { CheckIcon, WrongIcon, XIcon } from "@/src/app/icons/icons";
// import { OneItemRequestPageProps } from "@/src/types";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";
import OneItemPopUp from "../OneItemPopUp";
import { itemRequest } from "@/src/types/allRequestsType";
import srcImage from "@/src/shared/amazon.png"
import { changeReqStatus } from "@/src/util/ changeReqStatus";

export type PopUpProps = {
  setShow: Dispatch<SetStateAction<boolean>>
  setShowAdd: Dispatch<SetStateAction<boolean>>
};
export default function PopUp({ setShow, setShowAdd , User, id, amount, amountUsd, method, nameOnCard, phoneNumber, attachments, status, account, createdAt }: PopUpProps & itemRequest) {
  const t = useTranslations('dashboard')
  const date = new Date(createdAt);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear() - 2000;
  const minutes = date.getUTCMinutes();
  const hours = date.getUTCHours();
  const seconds = date.getUTCSeconds();
  const formattedTime = `${hours % 12}:${minutes}:${seconds}`;

  const formattedDate = `${day}/${month}/${year}`;
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-black/50" onClick={() => setShow(false)}></div>
      <div className="fixed z-50 rounded-lg bg-white dark:bg-primaryDark w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <XIcon className="absolute top-4 ltr:right-4 rtl:left-4 cursor-pointer dark:fill-white" onClick={() => setShow(false)} />
        <div className="w-full h-full px-6 py-4 flex flex-col gap-4 text-start">
          <p className="text-lg font-medium">
            {t('additional-information')}
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center">
              <p>{t('image')} :</p>
              <img
                src={attachments ? attachments[0] : `${srcImage}`}
                alt="image"
                title="image"
                loading="lazy"
                className="h-20 w-fit"
              />
            </div>
            <OneItemPopUp title="name-on-card" value={nameOnCard} />
            <OneItemPopUp title="phone-number" value={phoneNumber} />
            <OneItemPopUp title="email" value={User.email} />
            <OneItemPopUp title="amount" value={`${amount} EGP`} />
            <OneItemPopUp title="amount-usd" value={`${amountUsd}`+" $"} />
            <OneItemPopUp title="states" value={status} />
            <OneItemPopUp title="methods" value={method} />
            <OneItemPopUp title="account" value={account} />
            <OneItemPopUp title="created" value={`${formattedDate} - ${formattedTime}`} />
          </div>
          <div className="flex items-center gap-1">
            <p>
              {t('actions')} :
            </p>
            <div className="flex gap-1">
            {
              status === "pending" &&
              <>
              <button onClick={()=> {setShowAdd(true); setShow(false)}}>
                <CheckIcon className="hover:cursor-pointer" />
              </button>
              <button onClick={()=> changeReqStatus(`${id}`,"failed")}>
                <WrongIcon className="hover:cursor-pointer" />
              </button>
              </>
            }
            {
              status === "success" &&
              <>
              <button onClick={()=> changeReqStatus(`${id}`,"failed")}>
                <WrongIcon className="hover:cursor-pointer" />
              </button>
              </>
            }
            {
              status === "failed" &&
              <>
              <button onClick={()=> {setShowAdd(true); setShow(false)}}>
                <CheckIcon className="hover:cursor-pointer" />
              </button>
              </>
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
