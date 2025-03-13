import Cookies from "js-cookie";
import { Dispatch, SetStateAction } from "react";
import { transHistoryType } from "../types";
import { metaType } from "../types/allRequestsType";
import { ReadonlyURLSearchParams } from "next/navigation";

export const getCardReqs = (
  setData: Dispatch<SetStateAction<transHistoryType[] | [] | null>>,
  id: string,
  search: ReadonlyURLSearchParams,
  setPaginationReqs: Dispatch<SetStateAction<metaType | null>>
) => {
  fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }cards/requests/${id}?${search.toString()}&limitNo=10&sortKey=createdAt&sortValue=DESC`,
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
      // console.log(data);
      setData(data.data);
      setPaginationReqs(data.meta);
    })
    .catch((err) => {
      console.log(err);
    });
};
