import Cookies from "js-cookie";
import { getMyCardType } from "../types/getMyCardType";
import { Dispatch, SetStateAction } from "react";

export const getMyCard = (
  setData: Dispatch<SetStateAction<getMyCardType[] | null>>
) => {
  fetch(
    `${process.env.NEXT_PUBLIC_API_URL}cards/mine?sortKey=createdAt&sortValue=ASC`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
      //   console.log(data);
      setData(data.data);
    })
    .catch((err) => console.log(err));
};
