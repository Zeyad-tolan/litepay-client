import { Dispatch, FormEvent, SetStateAction } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export const handelSubmitPartOneForgotPassword = async (
  e: FormEvent<HTMLFormElement>,
  setPart: Dispatch<SetStateAction<1 | 2 | 3 | 4>>,
  setValueFirst: Dispatch<SetStateAction<string>> | undefined
) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());
  const email: string = `${data.email}`;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // phone / method=phone | email
  const raw = JSON.stringify({
    email: email,
    phone: `${email}`,
    method: `${email.includes("@") ? "email" : "phone"}`,
  });
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}users/reset-password-req`,
      {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      toast.error(errorData.message);
      return;
    }
    const result = await response.json();
    // console.log(result);
    Cookies.set("emailToken", result.emailToken);
    toast.success(result.message);
    setValueFirst?.(email);
    setPart(2);
  } catch (error) {
    console.error("Error sending reset password request:", error);
    toast.error("An error occurred while sending the reset password request.");
  }
  // if (!email) {
  //     setPart(2)
  // }
};
export const handelSubmitPartTwoForgotPassword = (
  e: FormEvent<HTMLFormElement>,
  setPart: Dispatch<SetStateAction<1 | 2 | 3 | 4>>
) => {
  e.preventDefault();
  setPart(3);
};
export const handelSubmitPartThreeForgotPassword = (
  e: FormEvent<HTMLFormElement>,
  setPart: Dispatch<SetStateAction<1 | 2 | 3 | 4>>
) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const dataOtp = Object.fromEntries(formData.entries());
  const otp = Object.values(dataOtp).join("");
  // console.log(otp);
  fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/validate-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      otp,
      emailToken: Cookies.get("emailToken"),
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
      Cookies.set("otpReset", otp);
      toast.success(data.message);
      setPart(4);
    })
    .catch((error) => {
      // console.error("Error occurred while validate the otp:", error);
      toast.error(error.message);
    });
  // setPart(4)
  //     /auth/validate-otp
  //      {otp,emailToken}
};
export const handelSubmitPartFourForgotPassword = (
  e: FormEvent<HTMLFormElement>,
  setErrorValue: Dispatch<SetStateAction<string>>
) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());
  // console.log(data);
  if (data.password != data.passwordConfirm) {
    return setErrorValue("password-mismatch-message");
  } else {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}users/reset-password-do`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: data.password,
        emailToken: Cookies.get("emailToken"),
        otp: Cookies.get("otpReset"),
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
        window.location.assign("/en/login");
        Cookies.remove("emailToken");
        Cookies.remove("otpReset");
      })
      .catch((error) => {
        console.error("Error occurred while reset the password:", error);
        toast.error(
          error.message || "An error occurred while reset the password."
        );
      });
  }
};
