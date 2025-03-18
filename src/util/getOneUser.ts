import Cookies from "js-cookie";
import { getUsersItemType } from "../types/allUsersType";
import { Dispatch, SetStateAction } from "react";
import { jwtDecode } from "jwt-decode";

export const getOneUser = async (
  id: string,
  setData: Dispatch<SetStateAction<getUsersItemType | null>>
) => {
  fetch(
    `${process.env.NEXT_PUBLIC_API_URL}users/one/${id || Cookies.get("id")}`,
    {
      method: "GET",
      headers: {
        token: `${Cookies.get("token")}`,
      },
    }
  )
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
      console.log(data);
      setData(() => data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
