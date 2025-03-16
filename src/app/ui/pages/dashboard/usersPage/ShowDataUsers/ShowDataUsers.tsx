"use client";
import { getAllUser } from "@/src/util/getAllUsers";
import Pagination from "../../requestPage/layout/Pagination";
import ShowDataUserBody from "../ShowDataUserBody";
import ShowDataUserHeader from "../ShowDataUserHeader";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getAllUsersType } from "@/src/types/allUsersType";

export default function ShowDataUsers() {
  const [data, setData] = useState<getAllUsersType | null>(null);
  const search = useSearchParams();
  useEffect(() => {
    getAllUser(search.toString(), setData);
  }, [search]);
  return (
    <>
      {data && (
        <>
          <table className="w-full text-sm">
            <ShowDataUserHeader />
            <ShowDataUserBody data={data.data} />
          </table>
          <Pagination meta={data.meta} />
        </>
      )}
    </>
  );
}
