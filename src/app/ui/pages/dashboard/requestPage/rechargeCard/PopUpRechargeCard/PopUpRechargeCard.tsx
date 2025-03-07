/* eslint-disable @next/next/no-img-element */
import { CheckIcon, DiamondDarkIcon, WrongIcon, XIcon } from "@/src/app/icons/icons";
import srcIcon from "@/src/shared/Diamond.svg";
// import { OneItemRechargeCardProps } from "@/src/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import OneItemPopUp from "../../newCard/OneItemPopUp";
// import { PopUpProps } from "../../newCard/PopUp/PopUp";
import { Dispatch, SetStateAction } from "react";
import { itemRequest } from "@/src/types/allRequestsType";
import srcImage from "@/src/shared/amazon.png"
import { changeReqStatus } from "@/src/util/ changeReqStatus";
import { changeBalane } from "@/src/util/changeBalane";


export default function PopUpRechargeCard({ setShow, data }: {setShow: Dispatch<SetStateAction<boolean>>, data:itemRequest}) {
  const t = useTranslations('dashboard')
  const date = new Date(data.createdAt);

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
            {
              data.User.Role.type === "vip" &&
              <div>
                <>
                  <Image
                    src={srcIcon}
                    alt=""
                    className={`${data.User.Role.type === "vip" ? "border border-solid border-primary bg-primary/30 rounded-full h-fit w-fit p-2 flex justify-center items-center" : ""} dark:hidden`}
                  />
                  <DiamondDarkIcon className={`${data.User.Role.type === "vip" ? "border border-solid border-primary bg-primary/30 rounded-full h-fit w-fit p-2 flex justify-center items-center" : ""} hidden dark:block`} />
                </>
              </div>
            }
            <div className="flex gap-1 items-center">
              <p>{t('image')} :</p>
              <img
                src={data.attachments ? data.attachments[0] : `${srcImage}`}
                alt="image"
                title="image"
                loading="lazy"
                className="h-20 w-fit"
              />
            </div>
            <OneItemPopUp title="name-on-card" value={data.nameOnCard} />
            <OneItemPopUp title="phone-number" value={data.phoneNumber} />
            <OneItemPopUp title="email" value={data.User.email} />
            <OneItemPopUp title="amount" value={`${data.amount} EGP`} />
            <OneItemPopUp title="amount-usd" value={`${data.amountUsd}`+"$"} />
            <OneItemPopUp title="states" value={data.status} />
            <OneItemPopUp title="methods" value={data.method} />
            <OneItemPopUp title="account" value={data.account} />
            <OneItemPopUp title="created" value={`${formattedDate} - ${formattedTime}`} />
          </div>
          <div className="flex items-center gap-1">
            <p>
              {t('actions')} :
            </p>
            <div className="flex gap-1">
            {
              data.status === "pending" &&
              <>
              <button onClick={()=>  changeBalane(`${data.id}`,`${data.Card?.id}`,((data.Card?.balance || 0)+data.amountUsd),data.userId)}>
                <CheckIcon className="hover:cursor-pointer" />
              </button>
              <button onClick={()=> changeReqStatus(`${data.id}`,"failed")}>
                <WrongIcon className="hover:cursor-pointer" />
              </button>
              </>
            }
            {
              data.status === "success" &&
              <>
              <button onClick={()=> changeReqStatus(`${data.id}`,"failed")}>
                <WrongIcon className="hover:cursor-pointer" />
              </button>
              </>
            }
            {
              data.status === "failed" &&
              <>
              <button onClick={()=> changeBalane(`${data.id}`,`${data.Card?.id}`,((data.Card?.balance || 0)+data.amountUsd),data.userId)}>
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
