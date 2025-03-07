import { FormEvent } from "react";
import Cookies from "js-cookie";
import { sendRequest } from "./sendRequest";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { trackingFbq, trackingTtq } from "./tracking";

export const handelInstapay =  (e: FormEvent<HTMLFormElement>,lang: string, router: AppRouterInstance) => {
    e.preventDefault()
    const id = Cookies.get("id") as string;
    trackingFbq('submit_insta_pay_form',{userId:+id})
    trackingTtq('submit_insta_pay_form',{userId:+id})
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    const returnFrom = Cookies.get("returnFrom")
    const allData = Cookies.get("allData")
    const raw = JSON.parse(allData as string)
    const all = { ...raw, ...data, attachments:[`${data.attachments}`]}
    if(returnFrom === "addBalance"){
        sendRequest(JSON.stringify(all),"add-balance-wait","card-dashboard",router,lang,"add-balance")
    }
    else if(returnFrom === "chargeCard"){
        sendRequest(JSON.stringify(all),"order-wait","card-req",router,lang,"charge-card")
    }
}