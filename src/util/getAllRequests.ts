import Cookies from "js-cookie";
import { getAllRequestsType } from "../types/allRequestsType";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

export const getAllRequests = (search:string,type:string,setData: Dispatch<SetStateAction<getAllRequestsType | null>>)=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}requests?${search}&pageLimit=10&reqType=${type}&sortKey=createdAt&sortValue=DESC`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
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
        toast.error(err.message)
    })
}