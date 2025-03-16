/* eslint-disable @next/next/no-img-element */
import {
  CheckCycleIcon,
  CheckIcon,
  ClockCyleIcon,
  MinusCycleIcon,
  ThreeDots,
  WrongIcon,
} from "@/src/app/icons/icons";
import { useState } from "react";
import OneTdNewCardReq from "../OneTdNewCardReq";
import PopUp from "../PopUp";
import { itemRequest } from "@/src/types/allRequestsType";
import srcImage from "@/src/shared/amazon.png";
import { changeReqStatus } from "@/src/util/ changeReqStatus";
import PopAddCard from "../PopAddCard";
import PopUpImage from "../../layout/PopUpImage";

export default function OneItem({
  User,
  amount,
  amountUsd,
  method,
  nameOnCard,
  phoneNumber,
  attachments,
  status,
  account,
  createdAt,
  Card,
  cardId,
  id,
  telegram,
  type,
  updatedAt,
  userId,
}: itemRequest) {
  const [show, setShow] = useState<boolean>(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showImage, setShowImage] = useState(false);

  return (
    <tr className="border-t">
      <td className={`font-normal py-1 flex justify-center`}>
        {attachments && attachments[0].length > 1 ? (
          <img
            src={attachments[0]}
            alt={nameOnCard}
            width={500}
            height={500}
            loading="lazy"
            className="!w-16 !h-14"
            onClick={() => setShowImage(true)}
          />
        ) : (
          <img
            src={`${srcImage}`}
            alt={nameOnCard}
            width={500}
            height={500}
            loading="lazy"
            className="!w-16 !h-14"
            onClick={() => setShowImage(true)}
          />
        )}
      </td>
      <OneTdNewCardReq value={nameOnCard} />
      <OneTdNewCardReq value={phoneNumber} />
      <OneTdNewCardReq value={`${amount} EGP`} />
      <OneTdNewCardReq value={`${amountUsd}` + " $"} />
      <td className={`font-normal py-1 text-center`}>
        <span
          className={`flex justify-center mx-auto items-center gap-1 ${
            status === "pending"
              ? "text-[#B5850B] bg-[#FFF6E9]"
              : status === "success"
              ? "text-[#165E3D] bg-[#EDFFEA]"
              : "text-[#B83131] bg-[#FFEAEA]"
          } px-3 capitalize py-1 w-fit rounded-md`}
        >
          {status === "success" ? (
            <CheckCycleIcon />
          ) : status === "pending" ? (
            <ClockCyleIcon />
          ) : (
            <MinusCycleIcon />
          )}
          {status}
        </span>
      </td>
      <OneTdNewCardReq value={method} />
      <td className={`font-normal py-1 text-center`}>
        <p className="flex justify-center gap-1">
          {status === "pending" && (
            <>
              <button
                onClick={() => {
                  setShowAdd(true);
                  setShow(false);
                }}
              >
                <CheckIcon className="hover:cursor-pointer" />
              </button>
              <button onClick={() => changeReqStatus(`${id}`, "failed")}>
                <WrongIcon className="hover:cursor-pointer" />
              </button>
            </>
          )}
          {status === "success" && (
            <>
              <button onClick={() => changeReqStatus(`${id}`, "failed")}>
                <WrongIcon className="hover:cursor-pointer" />
              </button>
            </>
          )}
          {status === "failed" && (
            <>
              <button
                onClick={() => {
                  setShowAdd(true);
                  setShow(false);
                }}
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
        {show && (
          <PopUp
            User={User}
            setShowAdd={setShowAdd}
            amount={amount}
            amountUsd={amountUsd}
            method={method}
            nameOnCard={nameOnCard}
            phoneNumber={phoneNumber}
            attachments={attachments}
            status={status}
            account={account}
            createdAt={createdAt}
            setShow={setShow}
            Card={Card}
            cardId={cardId}
            id={id}
            telegram={telegram}
            type={type}
            updatedAt={updatedAt}
            userId={userId}
          />
        )}
        {showAdd && (
          <PopAddCard
            userId={userId}
            balance={`${amountUsd}`}
            id={`${id}`}
            setShow={setShowAdd}
            show={showAdd}
          />
        )}
        {showImage && (
          <PopUpImage
            src={
              attachments && attachments[0].length > 1
                ? attachments[0]
                : `${srcImage}`
            }
            setShow={setShowImage}
            show={showImage}
          />
        )}
      </td>
    </tr>
  );
}
