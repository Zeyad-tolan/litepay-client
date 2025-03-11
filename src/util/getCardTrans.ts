import Cookies from "js-cookie";
import { Dispatch, SetStateAction } from "react";
import { transHistoryType } from "../types";
import { metaType } from "../types/allRequestsType";
import { ReadonlyURLSearchParams } from "next/navigation";

export const getCardTrans = (
  setData: Dispatch<SetStateAction<transHistoryType[] | [] | null>>,
  id: string,
  search: ReadonlyURLSearchParams,
  setPaginationTrans: Dispatch<SetStateAction<metaType | null>>
) => {
  fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }cards/transactions/${id}?${search.toString()}&limitNo=10&sortKey=bankCreatedAt&sortValue=DESC`,
    {
      method: "GET",
      headers: {
        token: `${Cookies.get("token")}`,
      },
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((errorData) => {
          throw new Error(errorData.message || "An error occurred");
        });
      }
    })
    .then((data) => {
      console.log(data);
      setData(data.data);
      setPaginationTrans(data.meta);
    })
    .catch((err) => {
      console.log(err);
    });
};
