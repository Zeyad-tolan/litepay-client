/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import HeroCardDetails from "../HeroCardDetails";
import HeaderCardDetails from "../HeaderCardDetails/HeaderCardDetails";
import CardTransactions from "../CardTransactions";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getMyCardType } from "@/src/types/getMyCardType";
import { getOneCard } from "@/src/util/getOneCard";
import { getCardTrans } from "@/src/util/getCardTrans";
import { getCardReqs } from "@/src/util/getCardReqs";
import { transHistoryType } from "@/src/types";
import { metaType } from "@/src/types/allRequestsType";

export default function MainCardDetails() {
  const { cardId } = useParams();
  const [dataCard, setCard] = useState<getMyCardType | null>(null);
  const [dataTrans, setTrans] = useState<transHistoryType[] | [] | null>(null);
  const [dataReqs, setReqs] = useState<transHistoryType[] | [] | null>(null);
  const [paginationReqs, setPaginationReqs] = useState<metaType | null>(null);
  const [paginationTrans, setPaginationTrans] = useState<metaType | null>(null);
  const search = useSearchParams();
  useEffect(() => {
    getCardTrans(setTrans, cardId as string, search, setPaginationTrans);
    getCardReqs(setReqs, cardId as string, search, setPaginationReqs);
  }, [cardId, search]);
  useEffect(() => {
    getOneCard(setCard, cardId as string);
  }, [cardId]);
  return (
    <>
      {dataCard &&
        dataTrans &&
        dataReqs &&
        paginationReqs &&
        paginationTrans && (
          <>
            <HeroCardDetails />
            <HeaderCardDetails
              cvv={dataCard.cvv}
              expiryDate={dataCard.expiryDate}
              status={dataCard.status}
              cardBalance={`${dataCard.balance}`}
              cardCreated={dataCard.createdAt}
              cardNumber={dataCard.cardNumber}
              email={dataCard.User.email}
              last30Days={`${dataCard.totalLast30DaysDeposit}`}
              phoneNumber={`${dataCard.User.phoneNumber}`}
              totalDeposits={`${dataCard.totalDeposit}`}
              user={dataCard.name}
              userId={dataCard.userId.toString()}
            />
            {dataTrans && dataReqs && (
              <CardTransactions
                data={[...dataTrans, ...dataReqs]}
                paginationReqs={paginationReqs}
                paginationTrans={paginationTrans}
              />
            )}
          </>
        )}
    </>
  );
}
