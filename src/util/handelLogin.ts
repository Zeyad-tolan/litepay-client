/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { tracking } from "./tracking";
import toast from "react-hot-toast";

export const handelSubmitLogin = async (
  e: FormEvent<HTMLFormElement>,
  setErrorValue: Dispatch<SetStateAction<string>>,
  lang: string,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setisAdmin: Dispatch<SetStateAction<boolean>>,
  setAdminParams: Dispatch<SetStateAction<object>>
) => {
  e.preventDefault();
  setIsLoading(true);
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  tracking("handle_login", {
    email: data.email as string,
  });

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    email: data.email,
    password: data.password,
  });

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}auth/login`,
      {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }
    );

    // Check if the response is successful
    if (!response.ok) {
      return response.json().then((errorData) => {
        toast.error(errorData.message);
      });
    }

    const res = await response.text();
    const result = JSON.parse(res);

    if (result.router && result.router.param && result.router.userId) {
      setisAdmin(true);
      setAdminParams(() => result.router);
      return;
    }
    // @ts-expect-error
    const { user } = jwtDecode(result.token);
    Cookies.set("token", `${result.token}`, {
      expires: 1 / 48,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    Cookies.set("id", `${user.id}`, {
      expires: 1 / 48,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    if (user.Role && user.Role.type === "owner") {
      window.location.assign(`/${lang}/dashboard`);
    } else {
      window.location.assign(`/${lang}/card-dashboard`);
    }

    // const myNewHeaders = new Headers();
    // myNewHeaders.append("token", result.token);
    // fetch(`${process.env.NEXT_PUBLIC_API_URL}users/${user.id}/cards`, {
    //     method: "GET",
    //     headers: myNewHeaders,
    //     redirect: "follow"
    // })
    //     .then((response) => response.text())
    //     .then((resultResponse) => {
    //         if (JSON.parse(resultResponse).data.length > 0) {
    //             return window.location.assign(`/${lang}/card-dashboard`);
    //         } else {
    //             // fetch in trans
    //             fetch(`${process.env.NEXT_PUBLIC_API_URL}users/req-trans`, {
    //                 method: "POST",
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'token': `${Cookies.get('token')}`
    //                 },
    //                 body: JSON.stringify({
    //                     "userId": `${Cookies.get('id')}`
    //                 }),
    //                 redirect: "follow"
    //             }).then((response) => response.json())
    //                 .then((result) => {
    //                     if(result.data.length > 0) {
    //                         return window.location.assign(`/${lang}/order-wait`);
    //                     } else {
    //                         return window.location.assign(`/${lang}/card-req`);
    //                     }
    //                 })
    //                 .catch((error) => console.error(error));

    //         }
    //     })
    //     .catch((error) => console.error(error));
  } catch (error: any) {
    console.error("Error:", error);
    toast.error(error.message);
  } finally {
    setIsLoading(false);
  }

  return null;
};
