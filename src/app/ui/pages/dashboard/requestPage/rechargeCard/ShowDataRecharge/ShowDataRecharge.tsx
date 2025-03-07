"use client"

import Pagination from "../../layout/Pagination";
import BodyDataRechargeCard from "../BodyDataRechargeCard";
import HeaderDataRechargeCard from "../HeaderDataRechargeCard";
import { getAllRequestsType } from "@/src/types/allRequestsType";
import { useSearchParams } from "next/navigation";
import { getAllRequests } from "@/src/util/getAllRequests";
import { useEffect, useState } from "react";

export default function ShowDataRecharge() {
  const [data,setData] = useState<getAllRequestsType | null>(null)
  const search = useSearchParams()
  useEffect(()=>{
    getAllRequests(search.toString(),"recharge",setData)
  },[search])
  return (
    <>
    { data &&
      <>
        <table className="w-full">
          <HeaderDataRechargeCard />
          <BodyDataRechargeCard data={data.data}/>
        </table>
        <Pagination meta={data.meta}/>
      </>
    }
    </>
  );
}
