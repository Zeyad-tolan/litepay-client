/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FormEvent } from "react";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

export const handelSubmitCartReqPartTwo = (e: FormEvent<HTMLFormElement>,lang: string,router: AppRouterInstance) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    const otp = data.otp as string
    const otpToken:any = jwtDecode(Cookies.get("otpToken") as string)
    // console.log(otpToken)
    if(+otp !== otpToken.otp){
        toast.error("Invalid OTP")
        return
    }
    else{
        Cookies.set('otp', otp)
        toast.success("OTP Verified")
        router.push(`/${lang}/charge-card`)
    }
}