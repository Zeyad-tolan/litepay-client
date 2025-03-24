/* eslint-disable @next/next/no-img-element */
"use client";

import {
  CheckCycleIcon,
  CheckIcon,
  ClockCyleIcon,
  DiamondDarkIcon,
  MinusCycleIcon,
  ThreeDots,
  WrongIcon,
} from "@/src/app/icons/icons";
import srcIcon from "@/src/shared/Diamond.svg";
// import { OneItemRechargeCardProps } from "@/src/types";
import Image from "next/image";
import { useState } from "react";
import OneTdNewCardReq from "../../newCard/OneTdNewCardReq";
import PopUpRechargeCard from "../PopUpRechargeCard";
import { itemRequest } from "@/src/types/allRequestsType";
import srcImage from "@/src/shared/amazon.png";
import { changeReqStatus } from "@/src/util/ changeReqStatus";
import PopUpImage from "../../layout/PopUpImage";
import { changeBalane } from "@/src/util/changeBalane";
import PopRechargeCard from "../../../cardDetails/PopRechargeCard";

export default function OneItemRechargeCard({ data }: { data: itemRequest }) {
  const [show, setShow] = useState<boolean>(false);
  const [showImage, setShowImage] = useState(false);
  const [showRecharge, setShowRecharge] = useState(false);

  return (
    <tr className="border-t">
      <td>
        {data.User.Role.type === "vip" && (
          <>
            <Image
              src={srcIcon}
              alt=""
              className={`${
                data.User.Role.type === "vip"
                  ? "border border-solid border-primary bg-primary/30 rounded-full h-fit w-fit p-2 flex justify-center items-center"
                  : ""
              } dark:hidden`}
            />
            <DiamondDarkIcon
              className={`${
                data.User.Role.type === "vip"
                  ? "border border-solid border-primary bg-primary/30 rounded-full h-fit w-fit p-2 flex justify-center items-center"
                  : ""
              } hidden dark:block`}
            />
          </>
        )}
      </td>
      <td className={`font-normal py-1 flex justify-center`}>
        <img
          src={data.attachments ? data.attachments[0] : `${srcImage}`}
          alt={data.nameOnCard}
          width={500}
          height={500}
          className="!w-16 !h-14"
          onClick={() => setShowImage(true)}
        />
      </td>
      <OneTdNewCardReq value={data.nameOnCard} />
      <OneTdNewCardReq value={`${data.Card ? data.Card.cardNumber : "null"}`} />
      <OneTdNewCardReq value={`${data.amount} EGP`} />
      <OneTdNewCardReq value={`${data.amountUsd}` + "$"} />
      <td className={`font-normal py-1 text-center`}>
        <span
          className={`flex justify-center mx-auto items-center gap-1 ${
            data.status === "pending"
              ? "text-[#B5850B] bg-[#FFF6E9]"
              : data.status === "success"
              ? "text-[#165E3D] bg-[#EDFFEA]"
              : "text-[#B83131] bg-[#FFEAEA]"
          } px-3 capitalize py-1 w-fit rounded-md`}
        >
          {data.status === "success" ? (
            <CheckCycleIcon />
          ) : data.status === "pending" ? (
            <ClockCyleIcon />
          ) : (
            <MinusCycleIcon />
          )}
          {data.status}
        </span>
      </td>
      <OneTdNewCardReq value={data.method} />
      <td className={`font-normal py-1 text-center`}>
        <p className="flex justify-center gap-1">
          {data.status === "pending" && (
            <>
              <button onClick={() => setShowRecharge(true)}>
                <CheckIcon className="hover:cursor-pointer" />
              </button>
              <button onClick={() => changeReqStatus(`${data.id}`, "failed")}>
                <WrongIcon className="hover:cursor-pointer" />
              </button>
            </>
          )}
          {data.status === "success" && (
            <>
              <button onClick={() => changeReqStatus(`${data.id}`, "failed")}>
                <WrongIcon className="hover:cursor-pointer" />
              </button>
            </>
          )}
          {data.status === "failed" && (
            <>
              <button
                onClick={() =>
                  changeBalane(
                    `${data.id}`,
                    `${data.Card?.id}`,
                    (data.Card?.balance || 0) + data.amountUsd,
                    data.userId
                  )
                }
              >
                <CheckIcon className="hover:cursor-pointer" />
              </button>
            </>
          )}
        </p>
      </td>
      <td className={`font-normal py-1 text-center`}>
        <button className="bg-primary text-black px-2 rounded-md">
          <ThreeDots onClick={() => setShow(true)} />
        </button>
        {show && <PopUpRechargeCard data={data} setShow={setShow} />}
        <PopRechargeCard
          setShow={setShowRecharge}
          show={showRecharge}
          data={data}
        />
        <PopUpImage
          src={data.attachments ? data.attachments[0] : `${srcImage}`}
          setShow={setShowImage}
          show={showImage}
        />
      </td>
    </tr>
  );
}
