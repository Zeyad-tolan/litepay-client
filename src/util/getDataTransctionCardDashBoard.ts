import Cookies from "js-cookie";
import { Dispatch, SetStateAction } from "react";
import { transHistoryType } from "../types";
import { ReadonlyURLSearchParams } from "next/navigation";
import { metaType } from "../types/allRequestsType";

export const getDataTransactionCardDashBoard = async (
  setData: Dispatch<SetStateAction<null | transHistoryType[]>>,
  search: ReadonlyURLSearchParams,
  setPaginationReqs: Dispatch<SetStateAction<metaType | null>>
) => {
  // const date = new Date();
  // const day = date.getUTCDate();
  // const month = date.getUTCMonth() + 1;
  // const year = date.getUTCFullYear();
  // const today = `${year}-${`${month}`.length === 1 ? `0${month}` : `${month}`}-${`${day}`.length === 1 ? `0${day}` : `${day}`}`;
  const token = Cookies.get("token");
  const id = Cookies.get("id");
  try {
    const myHeaders = new Headers();
    myHeaders.append("token", token ? token : "");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      userId: id,
    });

    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }users/req-trans?${search.toString()}&limit=10&sort=desc`,
      {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }
    );

    const result = await response.text();
    // console.log("result", JSON.parse(result));
    setData(JSON.parse(result).data);
    setPaginationReqs(JSON.parse(result).meta);
  } catch (error) {
    console.error("Error fetching transaction data:", error);
  }
};
