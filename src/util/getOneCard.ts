import Cookies from "js-cookie"
import { Dispatch, SetStateAction } from "react"
import { getMyCardType } from "../types/getMyCardType"

export const getOneCard = (setData: Dispatch<SetStateAction<getMyCardType | null>>,id:string)=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}cards/one/${id}`,{
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
        // console.log(data)
        setData(data.data)
    })
    .catch(err=>{
        console.log(err)
    })
}