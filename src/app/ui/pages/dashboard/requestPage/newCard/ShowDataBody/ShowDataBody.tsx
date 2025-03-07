"use client"

// import { newCardReqData } from "@/src/app/data/newCardReqData";
import OneItem from "../OneItem";
import { itemRequest } from "@/src/types/allRequestsType";

export default function ShowDataBody({data}:{data: itemRequest[]}) {
  return (
    <tbody>
      {data.map((item, index) => {
        return item.type === "card" &&
          <OneItem User={item.User} account={item.account} amount={item.amount} amountUsd={item.amountUsd} createdAt={item.createdAt} method={item.method} nameOnCard={item.nameOnCard} phoneNumber={item.phoneNumber} attachments={item.attachments} status={item.status} Card={item.Card} cardId={item.cardId} id={item.id} telegram={item.telegram} type={item.type} updatedAt={item.updatedAt} userId={item.userId} key={index} />
      })}
    </tbody>
  );
}
