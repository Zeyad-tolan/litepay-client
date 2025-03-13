/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "js-cookie";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FormEvent } from "react";
import { sendRequest } from "./sendRequest";
import { trackingFbq, trackingTtq } from "./tracking";

export const handelSubmitAddBalance = (
  e: FormEvent<HTMLFormElement>,
  rate: number,
  promo: string,
  type: string,
  lang: string,
  router: AppRouterInstance
) => {
  e.preventDefault();
  const userId = Cookies.get("id") as string;
  trackingFbq("next_on_charge_card_form", { userId: +userId });
  trackingTtq("next_on_charge_card_form", { userId: +userId });
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());
  const allData: { [key: string]: any } = { ...data };
  allData.userId = userId ? +userId : "";
  allData.rate = +rate;
  allData.cardId = +data.cardId;
  allData.method = type;
  allData.promo = promo ? promo : "null";
  allData.amount = +data.amount;
  allData.amountUsd = +data.amountUsd;
  // console.log(allData);

  const raw = JSON.stringify(allData);

  if (allData.method === "instapay") {
    Cookies.set("amountInst", allData.amount);
    Cookies.set("allData", raw);
    Cookies.set("returnFrom", "addBalance");
    router.push(`/${lang}/instapay`);
  } else {
    sendRequest(
      raw,
      "add-balance-wait",
      "card-dashboard",
      router,
      lang,
      "add-balance"
    );
  }
};
