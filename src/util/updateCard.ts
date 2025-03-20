/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "js-cookie";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

export const updateCard = (
  id: string,
  data: any,
  setShow?: Dispatch<SetStateAction<boolean>>
) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}cards/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: `${Cookies.get("token")}`,
    },
    body: JSON.stringify({
      ...data,
      // userId: Cookies.get("id"),
    }),
  })
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
      // console.log(data)
      toast.success(data.message);
      if (setShow) {
        setShow(false);
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.message);
    });
};
