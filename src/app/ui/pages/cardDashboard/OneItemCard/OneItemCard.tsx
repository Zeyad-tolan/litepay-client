/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowBottomIcon } from "@/src/app/icons/icons";
// import srcImage from "@/src/shared/amazon.png";
import instapay from "@/src/shared/insta-pay-image.png";
import vodafone from "@/src/shared/vodafoneImg.png";
import { transHistoryType } from "@/src/types";
import { getAvatarTrans } from "@/src/util/getAvatarTrans";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function OneItemCard({
  amount,
  companyName,
  details,
  failureReason,
  avatar,
  amountUsd,
  method,
  type,
  status,
  createdAt,
}: transHistoryType) {
  const t = useTranslations("Cards");
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const allDetails = details ? JSON.parse(details) : null;
  // console.log(allDetails);

  const date = new Date(createdAt as string);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear() - 2000;

  const minutes = date.getMinutes();
  let hours = date.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")} ${ampm}`;

  const formattedDate = `${day}/${month}/${year}`;

  useEffect(() => {
    if (companyName) {
      getAvatarTrans(companyName, setImage);
    }
  }, [companyName]);

  return (
    <div className="w-full flex flex-col gap-0">
      <div className="grid md:grid-cols-12 grid-cols-11 w-full items-center gap-2 md:text-base text-xs">
        <div className="md:col-span-1 col-span-2 h-16">
          {avatar ? (
            <img
              alt=""
              src={`${avatar}`}
              className="w-fit h-[90%] mt-1 object-contain"
            />
          ) : image != "" && image !== "null" ? (
            <img
              alt=""
              src={`${image}`}
              className="w-fit h-[90%] mt-1 object-contain"
            />
          ) : method ? (
            <Image
              alt=""
              src={method == "instapay" ? instapay : vodafone}
              className="w-10 h-full object-contain"
            />
          ) : null}
        </div>
        <p className="col-span-2 md:col-span-2">{method || companyName}</p>
        <div className="md:flex col-span-5 hidden justify-center items-center w-full">
          <div
            className={`w-fit px-2 py-0 rounded-full ${
              status == "rejected" || status == "failed"
                ? "border border-solid border-[#FF8282] bg-[#FF8282] bg-opacity-15 text-[#FF8282]"
                : status == "pending"
                ? "border border-solid border-[#D79A00] bg-[#D79A00] bg-opacity-15 text-[#D79A00]"
                : ""
            } `}
          >
            {t(
              status == "failed" || status == "rejected"
                ? "failure"
                : status == "pending"
                ? "pending"
                : ""
            )}
          </div>
        </div>
        <p
          className={`md:col-span-1 col-span-2 font-medium ${
            status == "pending" && type == "recharge"
              ? "text-[#D79A00]"
              : status == "failed" || status == "rejected"
              ? "line-through"
              : status == "success" && type == "recharge"
              ? "text-[#008000]"
              : status == "approved" &&
                // type == "checkout" &&
                amount &&
                amount > 0
              ? "text-[#008000]"
              : ""
          }`}
        >
          {(status !== "failed" &&
            status !== "rejected" &&
            type == "recharge") ||
          type == "card"
            ? "+"
            : ""}
          {amountUsd
            ? amountUsd
            : allDetails.relatedTransactions[0] && amount
            ? (
                +amount.toString() +
                +allDetails.relatedTransactions[0].amount.toString()
              ).toFixed(2)
            : amount}
        </p>
        <p className="md:col-span-1 col-span-2 font-medium">{formattedDate}</p>
        <p className="md:col-span-1 col-span-2 font-medium">{formattedTime}</p>
        {method !== "instapay" && method !== "vodafone" ? (
          <ArrowBottomIcon
            className={`md:w-auto md:h-auto w-4 h-4 col-span-1 cursor-pointer fill-black dark:fill-white ${
              show ? "rotate-180" : ""
            } transition-all duration-500`}
            onClick={() => setShow(!show)}
          />
        ) : null}
      </div>
      {allDetails && (
        <div className={`${show ? "block" : "hidden"}`}>
          <div
            className={`grid md:grid-cols-3 grid-cols-1 gap-2 md:text-base text-xs`}
          >
            <p>
              {t("bank-description")} {allDetails.bankDescription}
            </p>
            {failureReason && (
              <p className="md:col-span-2">
                {t("failure-reason")} {failureReason}
              </p>
            )}
          </div>
          {allDetails.relatedTransactions[0] && (
            <p>
              Intl. Transaction Fee:{" "}
              {allDetails.relatedTransactions[0].amount.toString().slice(1)} $
            </p>
          )}
        </div>
      )}
    </div>
  );
}
