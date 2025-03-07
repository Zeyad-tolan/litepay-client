/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import Pagination from "../../requestPage/layout/Pagination";
import ShowDataCardBody from "../ShowDataCardBody";
import ShowDataCardHeader from "../ShowDataCardHeader";
import { useSearchParams } from "next/navigation";
import { getAllCards } from "@/src/util/getAllCards";
import { getAllCardsType } from "@/src/types/getAllCardsType";

export default function ShowDataCard() {
  const [data, setData] = useState<getAllCardsType | null>(null);
  const search = useSearchParams()
  useEffect(() => {
    getAllCards(search.toString(), setData);
  },[search])
  // console.log(data);
  return (
    <>
      {
        data &&
        <>
          <table className="w-full">
            <ShowDataCardHeader />
            <ShowDataCardBody data={data.data} />
          </table>
          <Pagination meta={data.meta}/>
        </>
      }
    </>
  );
}
