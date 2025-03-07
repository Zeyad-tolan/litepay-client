/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch, SetStateAction } from "react";
import Cookies from "js-cookie";

export const getCardPrice = (setCardPrice: Dispatch<SetStateAction<number>>) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}card-price`,{
        method:"GET",
        headers:{
            "token":`${Cookies.get('token')}`
        }
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
    .then(data=>{
        console.log(data)
        const card = data.data.find((item:any)=> item.isActive === true);
        setCardPrice(+(card.cardPrice))
    })
    .catch(err=>{
        console.log(err)
    })
}