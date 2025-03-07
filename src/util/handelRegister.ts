/* eslint-disable @typescript-eslint/ban-ts-comment */
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Dispatch, FormEvent, SetStateAction } from "react";
import toast from 'react-hot-toast';
import { postData } from "../api";
import { tracking } from "./tracking";

export const handelSubmitRegister = async (e: FormEvent<HTMLFormElement>, setErrorValue: Dispatch<SetStateAction<string>>, lang: string) => {
  e.preventDefault();
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&]).{8,}$/
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  tracking('handle_signup',{
    email:data.email as string,
  })
  // console.log(lang);
  if (data.password != data.passwordConfirm) {
    console.log("not");
    return setErrorValue("password-mismatch-message")
  } else {
    if (passwordPattern.test(`${data.password}`)) {
      // start auth 
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}auth/signup`, {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(Object.fromEntries(Object.entries(data).slice(0, -1))),
          redirect: "follow"
        }
        );

        if (!response.ok) {
          return response.json().then((errorData) => {
            toast.error(errorData.message)
        });
        }

        const resultSignUp = await response.text();
        const newResultSignUp = JSON.parse(resultSignUp)
        if (newResultSignUp.message == "signup success") {
          // set login to save token in cookies
          try {
            const result: { message: string, token: string } = await postData("auth/login", JSON.stringify(Object.fromEntries(Object.entries(data).slice(0, -1))));
            if (result instanceof Error) {
              setErrorValue("incorrect-password")
            } else {
              if (result.message == "login success") {
                // @ts-expect-error
                const { user } = jwtDecode(`${result.token}`);
                Cookies.set('id', `${user.id}`,{expires: 1,path:"/",sameSite:"lax",secure:process.env.NODE_ENV === "production"})
                Cookies.set('token', `${result.token}`,{expires: 1,path:"/",sameSite:"lax",secure:process.env.NODE_ENV === "production"})
                return window.location.assign(`/${lang}/card-req`);
                // 
              }
            }
          } catch (err) {
            console.error("Unexpected error:", err);
          }
          // end login
        }
      } catch (error) {
        console.error("Error:", error);
      }

      return null
    } else {
      return setErrorValue("msg-not-password")
    }
  }
}