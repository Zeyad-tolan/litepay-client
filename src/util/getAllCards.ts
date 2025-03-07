import Cookies from "js-cookie"
import { Dispatch, SetStateAction } from "react"
import { getAllCardsType } from "../types/getAllCardsType"

export const getAllCards = (search:string,setData: Dispatch<SetStateAction<getAllCardsType | null>>)=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}cards/all?${search}&limitNo=10&sortKey=createdAt&sortValue=DESC`,{
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
        setData(data)
    })
    .catch(err=>{
        console.log(err)
    })
}