"use client"

import { useEffect, useState } from "react";
import Pagination from "../../layout/Pagination";
import ShowDataBody from "../ShowDataBody";
import ShowDataHeader from "../ShowDataHeader";
import { getAllRequestsType } from "@/src/types/allRequestsType";
import { useSearchParams } from "next/navigation";
import { getAllRequests } from "@/src/util/getAllRequests";

export default function ShowData() {
  const [data,setData] = useState<getAllRequestsType | null>(null)
  const search = useSearchParams()
  useEffect(()=>{
    getAllRequests(search.toString(),"card",setData)
  },[search])
  // console.log(data)
  return (
    <>
    { data &&
      <>
        <table className="w-full">
          <ShowDataHeader />
          <ShowDataBody data={data.data}/>
        </table>
        <Pagination meta={data.meta}/>
      </>
    }
    </>
  );
}
