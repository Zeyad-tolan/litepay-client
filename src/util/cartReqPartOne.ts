import { Dispatch, FormEvent, SetStateAction } from "react";
import { sendOTP } from "./sendOTP";

export const handelSubmitPartOne = (e: FormEvent<HTMLFormElement>, setPart: Dispatch<SetStateAction<number>>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    sessionStorage.setItem("name-card-req", data.name as string);
    sessionStorage.setItem("gender-card-req", data.gender as string);
    sessionStorage.setItem("age-card-req", data.age as string);
    sessionStorage.setItem("phone-card-req", data.phone as string);

    // console.log(data);

    sendOTP(setPart)
}