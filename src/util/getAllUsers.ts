import Cookies from "js-cookie"
import { getAllUsersType } from "../types/allUsersType"
import { Dispatch, SetStateAction } from "react"

export const getAllUser = (search:string,setData: Dispatch<SetStateAction<getAllUsersType | null>>)=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}users?${search}&limitNo=10&sortKey=createdAt&sortValue=DESC`,{
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