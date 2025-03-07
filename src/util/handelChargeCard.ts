/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from 'js-cookie';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { FormEvent } from "react";
import { sendRequest } from './sendRequest';

export const handelSubmitChargeCard = async (e: FormEvent<HTMLFormElement>, rate: string, promo: string, type: string, lang: string, router: AppRouterInstance) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const allData: { [key: string]: any } = { ...data }
    const gender = window.sessionStorage.getItem('gender-card-req')
    allData.gender = gender ? gender == '1' ? "male" : "female" : ""
    const age = window.sessionStorage.getItem('age-card-req')
    allData.age = age ? +age : ""
    const phoneNumber = window.sessionStorage.getItem('phone-card-req')
    allData.phoneNumber = phoneNumber ? phoneNumber : ""
    const nameOnCard = window.sessionStorage.getItem('name-card-req')
    allData.nameOnCard = nameOnCard ? nameOnCard : ""
    allData.type = "card"
    allData.account = "1212122"
    allData.telegram = ""
    allData.rate = +rate
    allData.promo = promo.length > 0 ? promo : "null"
    allData.method = type
    allData.otp = +(Cookies.get('otp') as string)
    allData.otpToken = Cookies.get('otpToken') as string

    const id = Cookies.get('id')
    allData.userId = id ? +id : ""
    
    allData.amount = +data.amount
    allData.amountUsd = +data.amountUsd
    const raw = JSON.stringify(allData);
    // console.log(allData);
    // console.log(raw);

    if(allData.method === "instapay"){
        Cookies.set("amountInst",allData.amount)
        Cookies.set("allData",raw)
        Cookies.set("returnFrom","chargeCard")
        router.push(`/${lang}/instapay`)
    }
    else{
        sendRequest(raw,"order-wait","card-req",router,lang,"charge-card")
    }
}