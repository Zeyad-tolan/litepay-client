/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { tracking } from "./tracking";

export const sendRequest = (
  raw: string,
  succesReturn: string,
  errorReturn: string,
  router: AppRouterInstance,
  lang: string,
  event: string
) => {
  const myHeaders = new Headers();
  const token = Cookies.get("token");
  myHeaders.append("token", token ? token : "");
  myHeaders.append("Content-Type", "application/json");

  fetch(`${process.env.NEXT_PUBLIC_API_URL}requests`, {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((errorData) => {
          throw new Error(errorData.message || "An error occurred");
        });
      }
    })
    .then((data) => {
      // console.log(data,event)
      const send = data.data;
      toast.success("Your request has been sent successfully");
      if (event === "add-balance") {
        const argData = {
          cardId: send.cardId,
          amount: send.amount,
          amountUsd: send.amountUsd,
          userId: send.userId,
          method: send.method,
        };
        // console.log(argData)
        tracking("recharge_request_created", argData);
      } else if (event === "charge-card") {
        const argData = {
          userId: send.userId,
          amount: send.amount,
          amountUsd: send.amountUsd,
          method: send.method,
          requestId: send.id,
        };
        tracking("request_created", argData);
      }
      router.push(`/${lang}/${succesReturn}`);
      Cookies.remove("allData");
      Cookies.remove("returnFrom");
      Cookies.remove("amountInst");
    })
    .catch((error) => {
      console.error(error);
      toast.error(error.message);
      router.push(`/${lang}/${errorReturn}`);
    });
};
