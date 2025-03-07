import Cookies from "js-cookie";
import { getMyCardType } from "../types/getMyCardType";
import { Dispatch, SetStateAction } from "react";

export const getUserCards = (id:string,setCards: Dispatch<SetStateAction<[] | getMyCardType[] | null>>)=>{
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}users/${id}/cards`, {
        method: "GET",
        headers: {
            "token": `${Cookies.get("token")}`,
        },
    })
    .then(res=>{
        if(res.ok){
            return res.json()
        }
        else{
            return res.json().then((errorData) => {
                throw new Error(errorData.message || 'An error occurred');
            });
        }
    })
        .then(data => {
            // console.log(data)
            setCards(data.data)
        })
        .catch(err => {
            console.log(err)
        })
}