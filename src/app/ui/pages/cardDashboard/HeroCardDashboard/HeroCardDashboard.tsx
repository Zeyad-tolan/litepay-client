/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { getMyCardType } from "@/src/types/getMyCardType";
import DetailsCardDashboard from "../DetailsCardDashboard";
import ImageDetailsCard from "../ImageDetailsCard";
import { transHistoryType } from "@/src/types";
import { useEffect, useMemo, useState } from "react";
import { getAllRating } from "@/src/util/getAllRating";

interface IProp {
  data: getMyCardType;
}

export default function HeroCardDashboard({ data }: IProp) {
  const [vodafoneCash, setVodafoneCash] = useState<number>(0);
  const [normalUser, setNormalUser] = useState<number>(0);
  const [vipUser, setVipUser] = useState<number>(0);
  // const totalDepositsRequests = useMemo(() => {
  //   let total = 0;
  //   dataReqs.forEach((req) => {
  //     if(req.status === "success"){
  //       total += +(req.amountUsd as string) || 0;
  //     }
  //   })
  //   return total;
  // }, [dataReqs]);
  // const totalDepositsTrans = useMemo(() => {
  //   let total = 0;
  //   dataTrans.forEach((req) => {
  //     if(req.status === "approved"){
  //       total -= (req.amount || 0);
  //     }
  //   })
  //   return total;
  // }, [dataTrans]);
  // console.log("Reqs => "+totalDepositsRequests)
  // console.log("Trans => ",totalDepositsTrans)
  useEffect(() => {
    getAllRating(setVodafoneCash, setVodafoneCash, setNormalUser, setVipUser);
  }, []);
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
      <ImageDetailsCard
        cardId={data.id}
        cvvNum={data.cvv}
        dateExp={`${data.expiryDate}`}
        id={data.cardNumber}
        name={data.name}
      />
      <DetailsCardDashboard
        normalUser={normalUser}
        vipUser={vipUser}
        lineBarValue={data.totalLast30DaysDeposit || 0}
        balance={data.balance}
        status={data.status}
        support="available"
        type="premium"
        provided={12000}
        toBeSpecial={500}
      />
    </div>
  );
}
